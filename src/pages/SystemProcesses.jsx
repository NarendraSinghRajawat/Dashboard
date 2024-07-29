import React from 'react';
import SystemProcessesChart from '../components/charts/SystemProcessesChart';
import CPUUtilizationChart from '../components/charts/CPUUtilizationChart';
import MemoryUsageChart from '../components/charts/MemoryUsageChart';
import { Box, Grid, Typography } from '@mui/material';

const SystemProcesses = () => {
  return (
    <div style={{paddingTop:'60px'}}>
      <Typography variant="h4" gutterBottom>System Processes</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
              <SystemProcessesChart />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
              <CPUUtilizationChart />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, borderRadius: 2, boxShadow: 2 }}>
              <MemoryUsageChart />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SystemProcesses;
