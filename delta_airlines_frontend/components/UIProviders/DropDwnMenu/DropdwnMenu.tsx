'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { Menu } from '@mui/icons-material';

interface DropDownString {
    tripChoice: string;
    dropDownSelections: string[];
}
export default function BasicSelect({tripChoice, dropDownSelections} : DropDownString) {
  const [age, setAge] = React.useState('');
  const [isWindowLoad, setIsWindowLoad] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() =>{
    const handleLoad = () => {
      setIsWindowLoad(true);
    }
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">{tripChoice}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          { dropDownSelections.map((element, index) => (
            <MenuItem key={index} value={element}>{element}</MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>
  );
}