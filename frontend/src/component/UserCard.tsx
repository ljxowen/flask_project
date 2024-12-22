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

interface UserCardDataProps {
    email: string;
    first_name: string;
    last_name: string;
}

const UserCard: React.FC<UserCardDataProps> = ({ email, first_name, last_name }) => {
    return (
        <Box sx={{ maxWidth: 600, margin: '20px auto' }}>
            <Card sx={{ marginBottom: 3, padding: 4, boxShadow: 'none', border: 'none' }}>
                <CardContent sx={{ textAlign: 'left' }}>
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
                    <Typography variant="body1" color="primary" gutterBottom>
                        Email：{email}
                    </Typography>
                    <Typography variant="body1" color="primary" gutterBottom>
                        First Name：{first_name}
                    </Typography>
                    <Typography variant="body1" color="primary" gutterBottom>
                        Last Name：{last_name}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default UserCard;