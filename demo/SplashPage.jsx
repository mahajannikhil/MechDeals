import React from 'react';
import Button from '@material-ui/core/Button';
import Dashboard from '../src/dashboard/Dashboard';

const SplashPage = () => (
  <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Dashboard />
  </div>
);

export default SplashPage;
