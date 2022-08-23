import { Box, Select } from "@chakra-ui/react";
import React from "react";

interface IProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const DropDownSort = () => {
  // const handleChange = (event: { target: { value: string } }) =>
  //   setSearchText(event.target.value);

  return (
    <>
      <Box padding={10} marginRight="70vw">
        <Select placeholder="Sort using">
          <option value="option1">Name A to Z</option>
          <option value="option2">Name Z to A</option>
          <option value="option3">Published At Old to New</option>
          <option value="option4">Published At New to Old</option>
          <option value="option5">Channel Name A to Z</option>
          <option value="option6">Channel Name A to Z</option>
        </Select>
      </Box>
    </>
  );
};

export default DropDownSort;
