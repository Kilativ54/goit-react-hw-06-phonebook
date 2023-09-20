import PropTypes from 'prop-types';
import React from 'react';

import { Label, Input } from './Filte.styled';

export const Filter = ({  handleChange }) => (
  <div>
    <Label>Find contacts by Name </Label>
    <Input
      type="text"
      name="filter"
      placeholder="Enter filter"
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
};
