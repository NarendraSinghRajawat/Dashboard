import React from 'react';
import BlockingActivitiesChart from '../components/charts/BlockingActivitiesChart';
import NetworkTrafficChart from '../components/charts/NetworkTrafficChart';
import { Box, Grid, Typography, Paper } from '@mui/material';

const additionalInfo = `
  This section provides detailed insights into the blocking activities of the system.
  Blocking activities refer to processes or actions that are halted due to various reasons such as
  resource contention, system overload, or security restrictions. Understanding these activities
  helps in identifying potential issues and optimizing system performance.
`;

const BlockingActivities = () => {
  return (
    <div style={{paddingTop:'60px'}}>
      <Typography variant="h4" gutterBottom>Blocking Activities</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 2,
                height: '600px',
                width: '100%',
                position: 'relative',
              }}
            >
              <BlockingActivitiesChart />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 2,
                height: '400px',
                width: '100%',
                position: 'relative',
              }}
            >
              <NetworkTrafficChart />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h6" gutterBottom>Additional Information</Typography>
              <Typography variant="body1">{additionalInfo}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BlockingActivities;
