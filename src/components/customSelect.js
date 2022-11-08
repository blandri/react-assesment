import { FormControl, InputLabel } from "@mui/material";
import React from "react";
import Select from "react-select";

const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: '538px',
      height: '40px',
      backgroundColor: '#F8F8F8',
      display: 'flex'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

const options = [
    {label: 'react', value: 'native'},
    {label: 'html', value: 'css'},
    {label: 'java', value: 'script'},
]

export const CustomSelect = ({placeholder}) => {
    return (
        <Select placeholder={placeholder} options={options} styles={customStyles} />
    )
}