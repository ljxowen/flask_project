import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { UsersService, LoginService, User } from '../client';
import { useNavigate } from 'react-router-dom';
import { message}  from 'antd'

export const LOCALSTORAGE_ACCESS_TOKEN_NAME = 'access_token';

interface AuthContextType {
  isAuthenticated: boolean | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();


  const logout = useCallback(() => {
    localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN_NAME);
    setIsAuthenticated(false);
    setUser(undefined);
    // navigate('/login');
  }, [navigate]);

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_NAME);
    if (token) {
      try {
        await getUser();
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to authenticate:', error);
        logout();
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [logout]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const getUser = async () => {
    const token = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_NAME)
    if (!token) {
      console.log("getUserMe failed: No Token");
      throw new Error("No token available");
    }
    try {
      const user = await UsersService.getApiUserUserByEmail({ email: token });

      if (!user?.is_active) {
        throw new Error("User is not active");
      }
    
      setUser(user);
    } catch (error) {
      message.error("get user infor failed: " + error);
      throw error;
    }
  };

  const login = async (email: string) => {
    try {
      const { email: emailToken } = await LoginService.postApiLoginUsers({ body: { email } });
      if (!emailToken) throw new Error("No data received from login");

      localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN_NAME, emailToken);
      await getUser();
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user, setUser, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};