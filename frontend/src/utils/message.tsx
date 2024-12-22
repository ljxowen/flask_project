import React from 'react';
import ReactDOM from 'react-dom/client';
import { Snackbar, Alert } from '@mui/material';

const createSnackbar = (
  message: string,
  severity: 'success' | 'error' | 'warning' | 'info' = 'info',
  duration: number = 3000
) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = ReactDOM.createRoot(div); 

  const handleClose = () => {
    root.unmount(); 
    div.remove(); 
  };

  root.render(
    <Snackbar open={true} autoHideDuration={duration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};


export const message = {
  success: (msg: string, duration?: number) => createSnackbar(msg, 'success', duration),
  error: (msg: string, duration?: number) => createSnackbar(msg, 'error', duration),
  warning: (msg: string, duration?: number) => createSnackbar(msg, 'warning', duration),
  info: (msg: string, duration?: number) => createSnackbar(msg, 'info', duration),
};
