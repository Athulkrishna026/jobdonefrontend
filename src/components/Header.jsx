import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div><Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'rgba(65, 154, 255, 1)'}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JobDone.com
          </Typography>
          <Button color="inherit">About us</Button>
        </Toolbar>
      </AppBar>
    </Box></div>
  )
}

export default Header