import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const SelectLocal = ({ id, multiple, label, chips, value, onChange, options }) => {
    const handleChange = (event) => {
        const { target: { value },} = event;
        onChange(
          typeof value === 'string' ? value.split(',') : value,
        );
      };


    return  <FormControl sx={{ width: '100%' }}>
        {
            chips ? 
                <>
                    <InputLabel id={`${id}-label`}>{label}</InputLabel>
                    <Select
                        labelId={`${id}-label`}
                        id={id}
                        multiple
                        value={value}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            {selected.map((value) => (
                            <Chip key={value} label={value} />
                            ))}
                        </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {options.map((option) => (
                            <MenuItem
                                key={option}
                                value={option}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </> :
                <>
                    <InputLabel id={`${id}-label`}>{label}</InputLabel>
                    <Select
                        labelId={`${id}-label`}
                        id={id}
                        multiple={multiple}
                        value={value}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                        >
                        {options.map((option) => (
                            <MenuItem
                            key={option}
                            value={option}
                            >
                            {option}
                            </MenuItem>
                        ))}
                        </Select>
                </>
        }
    </FormControl>
}

SelectLocal.defaultProps = {
    id: "",
    multiple: false,
    label: '',
    chips: false,
    value: null,
    onChange: () => {},
    options: []
}

SelectLocal.propTypes = {
    id: PropTypes.string,
    multiple: PropTypes.bool,
    label: PropTypes.string,
    chips: PropTypes.bool,
    value: PropTypes.any,
    onChange: PropTypes.func,
    options: PropTypes.array
}

export default SelectLocal;

