import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Box, Paper, Grid } from '@mui/material';
import { Warning, CheckCircle } from '@mui/icons-material';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';

const notifications = [
  { id: 1, type: 'alert', message: 'Unauthorized login attempt detected.', time: '2 minutes ago' },
  { id: 2, type: 'info', message: 'New security update available.', time: '10 minutes ago' },
  { id: 3, type: 'alert', message: 'Multiple failed login attempts.', time: '30 minutes ago' },
  { id: 4, type: 'info', message: 'System health check completed successfully.', time: '1 hour ago' },
  { id: 5, type: 'alert', message: 'Suspicious activity detected in network.', time: '2 hours ago' },
  { id: 6, type: 'info', message: 'New firewall rules applied.', time: '3 hours ago' },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ThreatNotifications = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={{paddingTop:'60px'}}>
      <Typography variant="h4" gutterBottom>Threat Notifications</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h6" gutterBottom>Recent Notifications</Typography>
              <List>
                {notifications.map((notification) => (
                  <ListItem key={notification.id}>
                    <ListItemIcon>
                      {notification.type === 'alert' ? <Warning color="error" /> : <CheckCircle color="success" />}
                    </ListItemIcon>
                    <ListItemText
                      primary={notification.message}
                      secondary={notification.time}
                    />
                  </ListItem>
                ))}
              </List>
              <Box sx={{ mt: 2 }}>
                <button onClick={handleClick}>Show Toast Notification</button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          This is a toast notification with dummy data!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ThreatNotifications;
