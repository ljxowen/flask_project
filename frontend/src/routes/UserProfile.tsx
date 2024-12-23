import * as React from 'react';
import UserCard from '../component/UserCard'
import ResponsiveAppBar from '../component/AppBar'
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import { useAuth } from "../hooks/useAuth"
import CircularProgress from '@mui/material/CircularProgress';
import { message } from '../utils/message';
import { extractErrorMessage } from "../utils/apiErrorHandler"
import { UsersService } from '../client';
import { UserUpdate } from '../client';

function UserProfile() {
    const [current_email, setEmail] = React.useState<string>("");
    const [current_first_name, setFirstName] = React.useState<string>("");
    const [current_last_name, setLastName] = React.useState<string>("");
    const [loading, setLoading] = React.useState(false);
    const { user, setUser } = useAuth();

    const handleUserUpdate = React.useCallback(async ( 
        first_name?: string, 
        last_name?: string,
        new_email?: string,
    ) => {
        try {
            setLoading(true);
            const body: UserUpdate = {current_email: current_email};
            if (first_name !== current_first_name) {
                body.first_name = first_name;
            }
            if (last_name !== current_last_name) {
                body.last_name = last_name;
            }
            if (new_email !== current_email) {
                body.new_email = new_email;
            }
            console.log("UserUpdate body: ", body);

            const updatedUser = await UsersService.patchApiUserUpdateUser({ body });
            console.log("Updated User: ", updatedUser);

            setUser(updatedUser);
        } catch (error) {
            setLoading(false);
            const apiErrorMessage = extractErrorMessage(error);
            console.error("Failed to Update", error);
            message.error(`Failed to Update: ${apiErrorMessage}`);
        } finally {
            setLoading(false);
        }
    }, [current_email, current_first_name, current_last_name]);

    React.useEffect(() => {
        if (user && user.email && user.first_name && user.last_name) {
            setEmail(user.email);
            setFirstName(user.first_name);
            setLastName(user.last_name);
        }
    }, [user]);
    
    return (
        <ThemeProvider theme={macTheme}>
            <React.Fragment>
                < ResponsiveAppBar />
                {loading ? (
                    <CircularProgress/>
                ) : (
                    < UserCard 
                        userUpdate={handleUserUpdate} 
                        email={current_email} 
                        first_name={current_first_name} 
                        last_name={current_last_name}  
                    /> 
                )}

            </React.Fragment>
        </ThemeProvider>
    );
}

export default UserProfile;