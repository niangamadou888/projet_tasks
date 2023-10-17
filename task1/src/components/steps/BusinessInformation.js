import { TextField } from '@mui/material';

export default function BusinessInformation() {


  return (
    <form style={{marginTop:4,}}>
        <TextField id="filled-basic" style={{marginRight:100, marginBottom:50}} label="Brand Name" variant="outlined" size='small' />
        <TextField id="filled-basic" label="Brand Type" variant="outlined" size='small' />
        <TextField id="filled-basic" style={{marginRight:100, marginBottom:50}} label="Street Address" variant="outlined" size='small' />
        <TextField id="filled-basic" label="City" variant="outlined" size='small' />
        <TextField id="filled-basic" style={{marginRight:100, marginBottom:50}} label="Zip Code" variant="outlined" size='small' />
        <TextField id="filled-basic" label="Tax ID Number" variant="outlined" size='small' />
        
        </form>
  );
}
