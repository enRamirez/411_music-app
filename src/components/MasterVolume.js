import * as React from 'react';
// import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
  }


export default function MasterVolume({volume, setVolume}) {  
    const handleSlider = (event, value) => {
        setVolume(value);
        console.log('volume:', value);
      };


      return (
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Volume"
            defaultValue={20}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={handleSlider}
          />
        </Box>
      );
    }