import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import "./SearchBar.css";

interface ISearchBarProps {
  search: (
    searchText: string,
    dollarSigns: number,
    hasDelivery: boolean
  ) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ search }) => {
  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    search(searchText, dollarSigns, hasDelivery);
  };

  const [searchText, setSearchText] = useState("");
  const [dollarSigns, setDollarSigns] = useState(0);
  const [hasDelivery, setHasDelivery] = useState(false);

  return (
    <form className="SearchBarContainer" onSubmit={handleSubmit}>
      <TextField
        className="SearchText"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        id="restaurant-search"
        label={"Keyword"}
        margin="normal"
        fullWidth={true}
        variant="outlined"
      />
      <ToggleButtonGroup
        className="DollarsSelect"
        value={dollarSigns}
        exclusive
        onChange={(e, newValue) => setDollarSigns(newValue)}
      >
        <ToggleButton value={1}>$</ToggleButton>
        <ToggleButton value={2}>$$</ToggleButton>
        <ToggleButton value={3}>$$$</ToggleButton>
        <ToggleButton value={4}>$$$$</ToggleButton>
      </ToggleButtonGroup>
      <FormControlLabel
        className="HasDelivery"
        control={
          <Switch
            checked={hasDelivery}
            onChange={(e, newValue) => setHasDelivery(newValue)}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label="Delivery"
      />
      <Button
        className="SearchButton"
        type="submit"
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
