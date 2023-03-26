// import React, { useState } from 'react'
import React from 'react';
import {Input} from "reactstrap";

const SearchBox = ({searchChange}) => {
  return (
    <div>
  <Input
    type="search"
    placeholder='search country'
    onChange={searchChange}
  />
</div>
  );
}

export default SearchBox;
