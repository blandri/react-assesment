import { Add, AddBox, Check, Close } from "@mui/icons-material";
import { Box, Button, Container, FormControl, Stack, IconButton, InputLabel, TextField, Toolbar, Typography, SvgIcon } from "@mui/material";
import React from "react";
import { CustomSelect } from "./customSelect";
import AddGoodModal from "./addGoodModal";
import AddHandlerModal from "./addHandlerModal";

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
    '@media(min-width:1200px)': {
        width: '410px',
    },
    height: '40px'
}

export const Form = () => {
  const [open, setOpen] = React.useState(false);
  const [openH, setOpenH] = React.useState(false);
  const handleOpen = () => setOpen(true);

 return (
    <Container sx={{display: 'flex', justifyContent: 'center'}}>
        <Box mt={26} sx={{width: {
            xs: '100%',
            lg: '1000px'
        }}}>
        <Typography variant="h6" color="primary" fontWeight={700}>Offloading car</Typography>
        <Box mt={7} gap={{xs: 5, lg: 0}} sx={{display: 'flex',flexDirection: {
            xs: 'column',
            lg: 'row'
        } ,justifyContent: 'space-between'}}>
        <Box>
        <Typography>Select car plate number</Typography>
        <Stack direction="row" alignItems="center" gap={{sx: 0, lg: 2}}>
            <Box sx={{width: '100%'}}>
            <CustomSelect placeholder={"select car"}/>
            </Box>
            <IconButton size="small" sx={{'&:hover': {
              backgroundColor: 'transparent'
            }}}>
              <AddBox color="primary" sx={{fontSize: '35px'}} />
            </IconButton>
        </Stack>
        </Box>
        <Box>
        <Typography>Select handlers</Typography>
        <Stack direction="row" alignItems="center" gap={{sx: 0, lg: 2}}>
            <Box sx={{width: '100%'}}>
            <CustomSelect placeholder={"select multiple handlers"}/>
            </Box>
            <IconButton onClick={()=> setOpenH(true)} size="small" sx={{'&:hover': {
              backgroundColor: 'transparent'
            }}}>
              <AddBox color="primary" sx={{fontSize: '35px'}} />
            </IconButton>
        </Stack>
        </Box>
        </Box>
        <Box mt={8} borderBottom={1} paddingBottom={1} sx={{borderColor: 'primary.main'}}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems="center">
            <Typography fontWeight={700} fontSize={14} color="primary">Product details</Typography>
            <Button size="small" onClick={()=> handleOpen()} variant="outlined" startIcon={<Add />} sx={{fontSize: '10px'}}>Add new product</Button>
            </Stack>
        </Box>
        <Box mt={4} borderLeft={8} borderBottom={1} borderTop={1} borderRight={1} p={0.8} borderRadius={1} sx={{backgroundColor: 'rgba(38, 170, 225, 0.04)', borderColor: 'primary.main'}}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems="center">
            <Typography fontSize={14}>Sugar</Typography>
            <Typography fontSize={14}>23 items</Typography>
            <Typography fontSize={14}>50 KG/item</Typography>
            <IconButton>
                <Check color="primary" sx={{width: '40px', height: '30px'}}/>
            </IconButton>
            </Stack>
        </Box>
        <Box mt={4} gap={{xs: 5, lg: 0}} sx={{display: 'flex', flexDirection: {
            xs: 'column',
            lg: 'row'
        }, justifyContent: 'space-between'}}>
            <Stack gap={5}>
            <Box>
            <Typography fontSize={14}>Select product name</Typography>
            <Stack direction="row" alignItems="center" gap={{sx: 0, lg: 2}}>
                <Box sx={{width: '100%'}}>
                <CustomSelect placeholder={"select product"}/>
                </Box>
                <AddBox color="primary" sx={{fontSize: '35px'}} />
            </Stack>
            </Box>
            <FormControl>
                    <Typography fontSize={14}>Weight/item</Typography>
                    <TextField size="small" placeholder="Enter product weight/item" variant="outlined" sx={textFieldStyles} />
                </FormControl>
            </Stack>
            <Stack gap={5} alignItems={{lg: "self-end", xs: "normal"}}>
                <FormControl>
                    <Typography fontSize={14}>Number of items</Typography>
                    <TextField size="small" placeholder="Enter number of items" variant="outlined" sx={textFieldStyles} />
                </FormControl>
                <FormControl>
                    <Typography fontSize={14}>Price/item (Optional)</Typography>
                    <TextField size="small" placeholder="Enter number of items" variant="outlined" sx={textFieldStyles} />
                </FormControl>
                <Button variant="contained" sx={{color: 'white', width: '113px',height: '29px', borderRadius: '5px', fontSize: '9px', '&:hover': {
                    backgroundColor: 'primary.main'
                }}}>Save product</Button>
            </Stack>
        </Box>
        <Box mt={6} sx={{width: '100%'}}>
            <Typography>Upload supporting document</Typography>
            <Box mt={1} sx={{display: 'flex', flexDirection: 'column', gap: '25px',justifyContent: 'center', alignItems: 'center' ,border: '1px dashed grey', width: '100%', height: {
                xs: '90px',
                lg: '130px'
            }, backgroundColor: '#F8F8F8', borderRadius: '8.4px' }}>
            <SvgIcon>
                <path d="M26.9966 0.965749C26.9966 0.301369 26.6702 0 25.9413 0C19.3971 0 12.8528 0 6.30858 0C5.57976 0 5.24571 0.301369 5.24571 0.965749C5.24571 2.50684 5.24571 4.04108 5.24571 5.58217C5.24571 5.67806 5.24571 5.77395 5.24571 5.94518C5.6329 5.59587 5.92899 5.2671 6.2934 5.01368C6.93112 4.56162 7.15888 4.01368 7.06778 3.29451C7.00704 2.75341 7.06019 2.20547 7.06019 1.66438C13.1337 1.66438 19.1466 1.66438 25.1594 1.66438C25.167 1.72602 25.1821 1.76027 25.1821 1.79451C25.1821 6.32874 25.1897 10.8698 25.1746 15.404C25.1746 16.2534 24.757 16.7397 23.8763 17.0136C22.9729 17.3013 22.0315 17.3698 21.0825 17.3835C20.5814 17.3903 20.0728 17.3766 19.5717 17.4246C19.0251 17.4725 18.7518 17.7807 18.7518 18.2807C18.7518 18.6575 18.7821 19.0342 18.7821 19.4109C18.7821 20.3561 18.7821 21.3081 18.4481 22.2191C18.1596 22.9999 17.6282 23.3424 16.7323 23.3424C13.65 23.3424 10.5677 23.3424 7.48534 23.3424C7.35627 23.3424 7.21962 23.3287 7.0526 23.3218C7.0526 22.3492 7.0526 21.4109 7.0526 20.4383C8.39637 20.4383 9.74014 20.4383 11.0763 20.4314C11.6078 20.4314 11.8887 20.1574 11.8963 19.6848C11.9038 19.1164 11.8963 18.5479 11.8963 17.9794C11.8963 16.7876 11.8963 15.589 11.8963 14.3424C12.0861 14.3424 12.2227 14.3424 12.3518 14.3424C13.3235 14.3424 14.2953 14.3424 15.2671 14.3424C15.6239 14.3424 15.9124 14.2397 16.0566 13.9246C16.2085 13.6095 16.0794 13.3493 15.8365 13.1164C13.4602 10.9246 11.0839 8.73969 8.70764 6.54792C8.28249 6.15751 7.83457 6.15066 7.4246 6.53422C5.04832 8.71914 2.67204 10.9109 0.295767 13.1027C0.030049 13.3424 -0.0838301 13.6164 0.0680087 13.9383C0.219848 14.2534 0.515933 14.3424 0.872755 14.3424C1.82934 14.3424 2.79352 14.3424 3.7501 14.3424C3.88676 14.3424 4.01582 14.3561 4.17525 14.363C4.17525 14.5342 4.17525 14.6712 4.17525 14.8082C4.17525 16.4177 4.17525 18.0205 4.17525 19.6301C4.17525 20.1574 4.46374 20.4383 5.04832 20.4451C5.11665 20.4451 5.18498 20.4451 5.2609 20.4451C5.2609 21.7054 5.2533 22.9999 5.26849 24.2876C5.27608 24.6095 5.51143 24.8424 5.85307 24.9383C6.05046 24.993 6.27822 24.9999 6.49079 24.9999C10.0135 24.9999 13.5361 24.9793 17.0588 24.9999C18.2583 25.0067 19.2604 24.6848 20.088 23.9109C21.9783 22.1369 23.8763 20.3698 25.7667 18.5958C26.3513 18.0479 26.7005 17.3766 26.8296 16.6301C26.9283 16.0821 26.989 15.5205 26.9966 14.9657C27.0042 10.2876 26.9966 5.62326 26.9966 0.965749Z" fill="#6D6D6D"/>
            </SvgIcon>
                <Typography fontSize={14}>Select file to upload</Typography>
            </Box>
        </Box>
        <Stack mt={6} direction="row" justifyContent="space-between">
            <Button size="small" variant="contained" sx={{color: 'white', background: '#333333', paddingX: '15px', paddingY: '7px', borderRadius: '10px', '&:hover': {
                backgroundColor: '#333333'
            }}}>Cancel</Button>
            <Button size="small" variant="contained" sx={{color: 'white', paddingX: '15px', paddingY: '7px', borderRadius: '10px', '&:hover': {
                backgroundColor: 'primary.main'
            }}}>Next</Button>
        </Stack>
    </Box>
    <AddGoodModal open={open} setOpen={setOpen} />
    <AddHandlerModal open={openH} setOpen={setOpenH} />
    </Container>
 )
}