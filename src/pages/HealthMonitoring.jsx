import React from 'react';
import CpuUsageChart from '../components/charts/CPUUtilizationChart';
import MemoryUsageChart from '../components/charts/MemoryUsageChart';
import DiskUsageChart from '../components/charts/DiskUsageChart';
import NetworkActivityChart from '../components/charts/NetworkTrafficChart';
import { Box, Grid, Typography, Paper } from '@mui/material';

const HealthMonitoring = () => {
  return (
    <div style={{paddingTop:'60px'}}>
      <Typography variant="h4" gutterBottom>Health Monitoring</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 2,
                height: '300px',
                width: '100%',
                position: 'relative',
              }}
            >
              <CpuUsageChart />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 2,
                height: '300px',
                width: '100%',
                position: 'relative',
              }}
            >
              <MemoryUsageChart />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 2,
                height: '300px',
                width: '100%',
                position: 'relative',
              }}
            >
              <DiskUsageChart />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: 2,
                height: '300px',
                width: '100%',
                position: 'relative',
              }}
            >
              <NetworkActivityChart />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HealthMonitoring;
