import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectQuality({ quality, setQuality }) {
  const handleSelect = (event) => {
    setQuality(event.target.value);
    console.log('quality:', event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={quality}
          onChange={handleSelect}
          label="quality"
          style={{ width: 250 }}
        >
          <MenuItem value={'Low'}>Low</MenuItem>
          <MenuItem value={'Normal'}>Normal</MenuItem>
          <MenuItem value={'High'}>High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}