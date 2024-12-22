import * as React from 'react';
import UserCard from '../component/UserCard'
import ResponsiveAppBar from '../component/AppBar'
import { ThemeProvider } from '@emotion/react';
import macTheme from '../context/MacTheme'
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from 'react-router-dom';
import { message } from '../utils/message';
import { extractErrorMessage } from "../utils/apiErrorHandler"

function UserProfile() {
    const [email, setEmail] = React.useState<string>("");
    const [first_name, setFirstName] = React.useState<string>("");
    const [last_name, setLastName] = React.useState<string>("");
    const [loading, setLoading] = React.useState(false);
    const { user } = useAuth();

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
                < UserCard email={email} first_name={first_name} last_name={last_name}  />
            </React.Fragment>
        </ThemeProvider>
    );
}

export default UserProfile;