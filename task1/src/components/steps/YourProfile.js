import { TextField } from '@mui/material';
import React, { useState } from "react";

export default function YourProfile({ collectData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    // Collect and send data to the parent component
    collectData({ firstName: event.target.value });
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    // Collect and send data to the parent component
    collectData({ lastName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Collect and send data to the parent component
    collectData({ Email: event.target.value });
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    // Collect and send data to the parent component
    collectData({ PhoneNumber: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Collect and send data to the parent component
    collectData({ Password: event.target.value });
  };

  return (
    <form style={{marginTop:4,}}>
        <TextField id="firstName" style={{marginRight:100, marginBottom:50}} label="First Name" variant="outlined" size='small' value={firstName}
        onChange={handleFirstNameChange} />
        <TextField id="lastName" label="Last Name" variant="outlined" size='small' value={lastName}
        onChange={handleLastNameChange}/>
        <TextField id="email" style={{marginRight:100, marginBottom:50}} label="Email" variant="outlined" size='small' value={email}
        onChange={handleEmailChange} />
        <TextField id="filled-basic" label="Phone Number" variant="outlined" size='small' value={phoneNumber}
        onChange={handlePhoneNumberChange} />
        <TextField id="filled-basic" type='password' style={{marginRight:100, marginBottom:50}} label="Enter Password" variant="outlined" size='small' value={password}
        onChange={handlePasswordChange} />
        <TextField id="filled-basic" type='password' label="Confirm Password" variant="outlined" size='small' />
        
        </form>
  );
}
