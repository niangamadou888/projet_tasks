import { TextField } from '@mui/material';
import React, { useState } from "react";

export default function BusinessInformation({ collectData }) {

  const [brandName, setBrandName] = useState("");
  const [brandType, setBrandType] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [taxIDNumber, setTaxIDNumber] = useState("");

  const handleBrandNameChange = (event) => {
    setBrandName(event.target.value);
    // Collect and send data to the parent component
    collectData({ BrandName: event.target.value });
  };

  const handleBrandTypeChange = (event) => {
    setBrandType(event.target.value);
    // Collect and send data to the parent component
    collectData({ BrandType: event.target.value });
  };

  const handleStreetAddressChange = (event) => {
    setStreetAdress(event.target.value);
    // Collect and send data to the parent component
    collectData({ StreetAddress: event.target.value });
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    // Collect and send data to the parent component
    collectData({ City: event.target.value });
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    // Collect and send data to the parent component
    collectData({ ZipCode: event.target.value });
  };

  const handleTaxIDNumberChange = (event) => {
    setTaxIDNumber(event.target.value);
    // Collect and send data to the parent component
    collectData({ TaxIDNumber: event.target.value });
  };


  return (
    <form style={{marginTop:4,}}>
        <TextField id="filled-basic" style={{marginRight:100, marginBottom:50}} label="Brand Name" variant="outlined" size='small' value={brandName} onChange={handleBrandNameChange} />
        <TextField id="filled-basic" label="Brand Type" variant="outlined" size='small' value={brandType} onChange={handleBrandTypeChange} />
        <TextField id="filled-basic" style={{marginRight:100, marginBottom:50}} label="Street Address" variant="outlined" size='small' value={streetAdress} onChange={handleStreetAddressChange} />
        <TextField id="filled-basic" label="City" variant="outlined" size='small' value={city} onChange={handleCityChange} />
        <TextField id="filled-basic" style={{marginRight:100, marginBottom:50}} label="Zip Code" variant="outlined" size='small' value={zipCode} onChange={handleZipCodeChange} />
        <TextField id="filled-basic" label="Tax ID Number" variant="outlined" size='small' value={taxIDNumber} onChange={handleTaxIDNumberChange} />
        
        </form>
  );
}
