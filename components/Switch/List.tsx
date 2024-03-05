import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchView2({ onClick }:any) {
  const handleSwitchChange = (event: { target: { checked: any; }; }) => {
    if (onClick) {
      onClick(event.target.checked);
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch defaultChecked onChange={handleSwitchChange} color='secondary' />}
        label="Toggle for Grid view"
      />
    </FormGroup>
  );
}


