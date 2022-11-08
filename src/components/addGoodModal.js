import { Close } from '@mui/icons-material';
import { AppBar, Box, Button, FormControl, IconButton, Modal, Stack, TextField, Toolbar, Typography } from '@mui/material';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '@media(min-width:600)': {
    width: '863px',
  height: '526px',
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  border: 'none',
  boxShadow: '0px'
};

const textFieldStyles = {
    '& label': {
        '&.Mui-focused': {
            marginLeft: 0,
            display: 'none'
        }
    },
    '& legend': {
        display: 'none'
    },
    '& fieldset': {
        border: '10px'
    },
    backgroundColor: '#F8F8F8',
    borderRadius: '5px',
    width: '538px',
    '@media(max-width:500px)': {
      width: '290px'
    },
    height: '40px'
}

export default function AddGoodModal({open, setOpen}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{border: 'none'}}
      >
        <Box sx={style}>
        <AppBar elevation={0} sx={{height: {
          xs: '80px',
          lg: '116px'
        }}}>
        <Toolbar sx={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'primary.text', '&:hover': {
              backgroundColor: 'transparent'
            } }}
            onClick={()=> handleClose()}
          >
            <Close sx={{fontSize: {
              xs: '20px',
              lg: '48px'
            }}} />
          </IconButton>
          <Typography fontSize={{xs: 13, lg: 30}} fontWeight={700} variant="h5" sx={{color: 'primary.text'}} >
            Add New Good
          </Typography>
        </Toolbar>
        </AppBar>
        <Box mt={15} sx={{display: 'flex', justifyContent: 'center'}}>
        <Stack gap={5}>
                <FormControl>
                    <Typography>Name</Typography>
                    <TextField size="small" placeholder="Name your good" variant="outlined" sx={textFieldStyles} />
                </FormControl>
                <FormControl>
                    <Typography>Dimension (Optional)</Typography>
                    <TextField size="small" placeholder="Specify size occupied" variant="outlined" sx={textFieldStyles} />
                </FormControl>
                <Button variant="contained" sx={{color: 'white', width: '97px',height: '36px', borderRadius: '5px', '&:hover': {
              backgroundColor: 'primary.main'
            }}}>ADD</Button>
            </Stack>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}
