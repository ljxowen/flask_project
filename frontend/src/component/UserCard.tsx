import React from 'react'
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Button,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

interface UserCardDataProps {
    userUpdate: (
        first_name?: string,
        last_name?: string,
        new_email?: string,
    ) => void;
    email: string;
    first_name: string;
    last_name: string;
}

interface UserProfileData {
    email: string;
    first_name: string;
    last_name: string;
}

const UserCard: React.FC<UserCardDataProps> = ({ userUpdate, email, first_name, last_name }) => {
    const [emailIsEdit, setEmailIsEdit] = React.useState(false);
    const [firstNameIsEdit, setFirstNameIsEdit] = React.useState(false);
    const [lastNameIsEdit, setLastNameIsEdit] = React.useState(false);
    const [currentUserProfile, setCurrentUserProfile] = React.useState<UserProfileData>({
        email: email,
        first_name: first_name,
        last_name: last_name,
    });

    React.useEffect(() => {
        setCurrentUserProfile({
            email: email,
            first_name: first_name,
            last_name: last_name,
        });
    }, [email, first_name, last_name]);

    
    return (
        <Box sx={{ maxWidth: 600, margin: '20px auto' }}>
            <Card sx={{ marginBottom: 3, padding: 4, boxShadow: 'none', border: 'none' }}>
                <CardContent sx={{ textAlign: 'left', width: '75%' }}>
                    <Box
                        component="img"
                        src="\m24_bw_dark.png"
                        alt="Mac Logo"
                        sx={{
                            width: '250px',
                            padding: 2,
                        }}
                    />
                    <Typography
                        variant="h4" 
                        color="primary" 
                        sx={{ fontWeight: 'bold' }}  
                        gutterBottom
                     >
                        User Profile
                    </Typography>

                    {/* Email */}
                    {emailIsEdit ? (
                        // editing
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                            <TextField
                                label="new_email"
                                variant="outlined"
                                value={currentUserProfile.email}
                                onChange={(e) =>
                                    setCurrentUserProfile((prev) => ({
                                        ...prev,
                                        email: e.target.value,
                                    }))
                                }
                            />
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1,}}>
                                <IconButton
                                    id="save_email"
                                    color="primary"
                                    onClick={() => {
                                        setEmailIsEdit(false);
                                        userUpdate(
                                            currentUserProfile.first_name, 
                                            currentUserProfile.last_name, 
                                            currentUserProfile.email
                                        );
                                    }}
                                >
                                    <SaveIcon />
                                </IconButton>
                                <IconButton
                                    id="cancel_email"
                                    color="secondary"
                                    onClick={() => setEmailIsEdit(false)}
                                >
                                    <CancelIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    ) : (
                        // not editing
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                            <Typography variant="body1" color="primary">
                                Email：{email}
                            </Typography>
                            <IconButton 
                                id="edit_email" 
                                color="primary" 
                                onClick={() => setEmailIsEdit(true)}
                            >
                                <EditIcon />
                            </IconButton>
                        </Box>
                    )}

                    {/* First Name */}
                    {firstNameIsEdit ? (
                        // editing
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                            <TextField
                                label="first_name"
                                variant="outlined"
                                value={currentUserProfile.first_name}
                                onChange={(e) =>
                                    setCurrentUserProfile((prev) => ({
                                        ...prev,
                                        first_name: e.target.value,
                                    }))
                                }
                            />
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1,}}>
                                <IconButton
                                    id ="save_first_name"
                                    color="primary"
                                    onClick={() => {
                                        setFirstNameIsEdit(false);
                                        userUpdate(
                                            currentUserProfile.first_name, 
                                            currentUserProfile.last_name, 
                                            currentUserProfile.email
                                        );
                                    }}
                                >
                                    <SaveIcon />
                                </IconButton>
                                <IconButton
                                    id="cancel_first_name"
                                    color="secondary"
                                    onClick={() => setFirstNameIsEdit(false)}
                                >
                                    <CancelIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    ) : (
                        // not editing
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                            <Typography variant="body1" color="primary">
                                First Name：{first_name}
                            </Typography>
                            <IconButton 
                                id="edit_first_name" 
                                color="primary" 
                                onClick={() => setFirstNameIsEdit(true)}
                            >
                                <EditIcon />
                            </IconButton>
                        </Box>
                    )}

                    {/* Last Name */}
                    {lastNameIsEdit ? (
                        // editing
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                            <TextField
                                label="last_name"
                                variant="outlined"
                                value={currentUserProfile.last_name}
                                onChange={(e) =>
                                    setCurrentUserProfile((prev) => ({
                                        ...prev,
                                        last_name: e.target.value,
                                    }))
                                }
                            />
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 1,}}>
                                <IconButton
                                    id ="save_last_name"
                                    color="primary"
                                    onClick={() => {
                                        setLastNameIsEdit(false);
                                        userUpdate(
                                            currentUserProfile.first_name, 
                                            currentUserProfile.last_name, 
                                            currentUserProfile.email
                                        );
                                    }}
                                >
                                    <SaveIcon />
                                </IconButton>
                                <IconButton
                                    id="cancel_last_name"
                                    color="secondary"
                                    onClick={() => setLastNameIsEdit(false)}
                                >
                                    <CancelIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    ) : (
                        // not editing
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 1 }}>
                            <Typography variant="body1" color="primary">
                                Last Name：{last_name}
                            </Typography>
                            <IconButton 
                                id="edit_last_name" 
                                color="primary" 
                                onClick={() => setLastNameIsEdit(true)}
                            >
                                <EditIcon />
                            </IconButton>
                        </Box>
                    )}

                </CardContent>
            </Card>
        </Box>
    );
}

export default UserCard;