import { Box, Select } from "@chakra-ui/react";
import React from "react";

interface IProps {
  sortText: string;
  setSortText: (text: string) => void;
}

export var helpMap: any = {
  option1: {
    orderBy: "name",
    orderType: "a",
  },
  option2: {
    orderBy: "name",
    orderType: "d",
  },
  option3: {
    orderBy: "published_at",
    orderType: "a",
  },
  option4: {
    orderBy: "published_at",
    orderType: "d",
  },
  option5: {
    orderBy: "channel_name",
    orderType: "a",
  },
  option6: {
    orderBy: "channel_name",
    orderType: "d",
  },
};

const DropDownSort: React.FC<IProps> = ({ sortText, setSortText }) => {
  const handleChange = (event: { target: { value: string } }) => {
    console.log(event.target.value);
    setSortText(event.target.value);
  };

  return (
    <>
      <Box padding={10} marginRight="70vw">
        <Select placeholder="Sort by relevance" onChange={handleChange}>
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
