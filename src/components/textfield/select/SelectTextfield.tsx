import SearchIcon from '@mui/icons-material/Search';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

const containsText = (text: string, searchText: string) =>
  text.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1;
export interface ISelectTextField {
  options: string[];
  onChange: any;
}
const SelectTextfield: React.FC<ISelectTextField> = ({ onChange, options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchText, setSearchText] = useState('');
  const displayedOptions = useMemo(
    () => options.filter((option) => containsText(option, searchText)),
    [searchText]
  );
  useEffect(() => {
    console.log(options);
  }, []);
  return (
    <FormControl fullWidth>
      <InputLabel id="search-select-label">Technicians</InputLabel>
      <Select
        name="group"
        MenuProps={{ autoFocus: false }}
        labelId="search-select-label"
        id="search-select"
        value={selectedOption}
        label="Technicians"
        onChange={(e) => {
          setSelectedOption(e.target.value);
          onChange(e);
        }}
        onClose={() => setSearchText('')}
        renderValue={() => selectedOption}
      >
        <ListSubheader>
          <TextField
            size="small"
            autoFocus
            placeholder="Type to search..."
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== 'Escape') {
                e.stopPropagation();
              }
            }}
          />
        </ListSubheader>
        {displayedOptions.map((option, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTextfield;
