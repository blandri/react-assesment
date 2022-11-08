import { Close } from '@mui/icons-material';
import { AppBar, Box, Button, FormControl, IconButton, Modal, Stack, TextField, Toolbar, Typography } from '@mui/material';
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '863px',
  height: '614px',
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
    height: '40px'
}

export default function AddHandlerModal({open, setOpen}) {
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
        <AppBar elevation={0} sx={{height: '116px'}}>
        <Toolbar sx={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'primary.text' }}
            onClick={()=> handleClose()}
          >
            <Close sx={{fontSize: '50px'}} />
          </IconButton>
          <Typography fontSize={31} fontWeight={700} variant="h6" sx={{color: 'primary.text'}} >
            Add New Handler
          </Typography>
        </Toolbar>
        </AppBar>
        <Box mt={20} sx={{display: 'flex', justifyContent: 'center'}}>
        <Stack gap={5}>
                <FormControl>
                    <Typography>Full Name</Typography>
                    <TextField placeholder="Enter handler's name" variant="outlined" sx={textFieldStyles} />
                </FormControl>
                <FormControl>
                    <Typography>ID Number</Typography>
                    <TextField placeholder="Enter handler's ID Number" variant="outlined" sx={textFieldStyles} />
                </FormControl>
                <FormControl>
                    <Typography>Phone Number</Typography>
                    <TextField placeholder="Enter handler's Phone number" variant="outlined" sx={textFieldStyles} />
                </FormControl>
                <Button variant="contained" sx={{color: 'white', width: '97px',height: '36px', borderRadius: '5px'}}>ADD</Button>
            </Stack>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}
