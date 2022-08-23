import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const Searchbar: React.FC<IProps> = ({ searchText, setSearchText }) => {
  const handleChange = (event: { target: { value: string } }) =>
    setSearchText(event.target.value);

  return (
    <>
      <Box padding={10}>
        <Input
          value={searchText}
          onChange={handleChange}
          placeholder="Can't find what you are looking for? Search here..."
          size="sm"
          // margin={10}
        />
      </Box>
    </>
  );
};

export default Searchbar;
