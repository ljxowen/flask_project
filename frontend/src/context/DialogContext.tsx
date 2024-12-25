import React, { 
    createContext, 
    useState, 
    useContext, 
    ReactNode 
} from 'react';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Button 
} from '@mui/material';

export interface DialogContextType {
  showDialog: (
    title: string, 
    message: string, 
    onConfirm?: () => void,
    onCancel?: () => void
    ) => void;
  closeDialog: () => void;
}

export const DialogContext = createContext<DialogContextType | undefined>(undefined);


export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const [onConfirmCallback, setOnConfirmCallback] = useState<(() => void) | undefined>();
  const [onCancelCallback, setOnCancelCallback] = useState<(() => void) | undefined>();

  const showDialog = (title: string, message: string, onConfirm?: () => void, onCancel?: () => void) => {
    setDialogTitle(title);
    setDialogMessage(message);
    setOnConfirmCallback(() => onConfirm); // Use a function wrapper to avoid stale state
    setOnCancelCallback(() => onCancel);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    setDialogTitle('');
    setDialogMessage('');
    setOnConfirmCallback(undefined);
  };

  const handleConfirm = () => {
    if (onConfirmCallback) {
      onConfirmCallback();
    }
    closeDialog();
  };

  const handleCancel = () => {
    if (onCancelCallback) {
        onCancelCallback();
    }
    closeDialog();
  };

  return (
    <DialogContext.Provider value={{ showDialog, closeDialog }}>
      {children}
      {/* Dialog Component */}
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>{dialogMessage}</DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </DialogContext.Provider>
  );
};
