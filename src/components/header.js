import { Close } from "@mui/icons-material";
import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
 return (
      <AppBar elevation={0} sx={{height: '116px', display: 'flex', justifyContent: 'center'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'primary.text' }}
          >
            <Close sx={{fontSize: '36px'}}/>
          </IconButton>
          <Typography variant="h6" fontSize={36} sx={{color: 'primary.text'}} >
            New Transhipment Entry
          </Typography>
        </Toolbar>
      </AppBar>
 )
}