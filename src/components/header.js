import { Close } from "@mui/icons-material";
import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
 return (
      <AppBar elevation={0} sx={{height: '85px', display: 'flex', justifyContent: 'center'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'primary.text' }}
          >
            <Close sx={{fontSize: {
              xs: '20px',
              lg: '28px'
            }}}/>
          </IconButton>
          <Typography variant="h5" fontSize={{xs: 20, lg: 28}} sx={{color: 'primary.text'}} >
            New Transhipment Entry
          </Typography>
        </Toolbar>
      </AppBar>
 )
}