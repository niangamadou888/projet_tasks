import { TextField } from '@mui/material';
import React, { useState } from 'react';

export default function YourProfile() {

  return (
    <form style={{marginTop:4,}}>
        <TextField id="fname" style={{marginRight:100, marginBottom:50}} label="First Name" variant="outlined" size='small' />
        <TextField id="filled-basic" label="Last Name" variant="outlined" size='small' />
        <TextField id="filled-basic" style={{marginRight:100, marginBottom:50}} label="Email" variant="outlined" size='small' />
        <TextField id="filled-basic" label="Phone Number" variant="outlined" size='small' />
        <TextField id="filled-basic" style={{marginRight:100, marginBottom:50}} label="Enter Password" variant="outlined" size='small' />
        <TextField id="filled-basic" label="Confirm Password" variant="outlined" size='small' />
        
        </form>
  );
}
