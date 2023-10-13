import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function AdditionalUsers() {
  
  return (
    <FormGroup>
    <FormControlLabel required control={<Checkbox />} label="By submiting your details, you agree to the terms and conditions." />
  </FormGroup>
  );
}
