import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [sexe, setSexe] = React.useState('');

  const handleChange = (event) => {
    setSexe(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sexe</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sexe}
          onChange={handleChange}
          autoWidth
          label="sexe"
        >
          <MenuItem value="">
            <em>Sélectionnez</em>
          </MenuItem>
          <MenuItem value={1}>Femme</MenuItem>
          <MenuItem value={2}>Homme</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
