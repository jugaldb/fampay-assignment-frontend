import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Searchbar from "./components/SearchBar";
import DisplayTable from "./components/DisplayTable";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Searchbar />
    <DisplayTable />
  </ChakraProvider>
);
