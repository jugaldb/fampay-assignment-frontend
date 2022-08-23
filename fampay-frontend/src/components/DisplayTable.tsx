import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./DisplayTable.css";
import DropDownSort from "./DropDownSort";
import Searchbar from "./SearchBar";

export default function DisplayTable() {
  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchResults = async () => {
    // setLoading(true);
    let limit = 10;
    const url =
      process.env.REACT_APP_BACKEND_URL +
      `/api/video?limit=${limit}&offset=${offset}`;

    try {
      const res = await axios.get(url);
      console.log(res);

      setResults(res.data.videos);
      setPages(res.data.pages);
    } catch (error) {
      console.log(error);
    }

    // setLoading(false);
  };

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * 10;

    setOffset(newOffset);
  };

  const fetchSearchResults = async () => {
    const url =
      process.env.REACT_APP_BACKEND_URL +
      `/api/search?q=${searchText}&offset=${offset}`;

    try {
      const res = await axios.get(url);
      console.log(res);

      setResults(res.data.videos);
      setPages(res.data.pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchText.length > 0) {
      const timeout = setTimeout(() => {
        fetchSearchResults();
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      fetchResults();
    }
  }, [searchText, offset]);

  // useEffect(() => {
  //   fetchResults();
  // }, []);

  return (
    <>
      <Searchbar
        searchText={searchText}
        setSearchText={(text) => setSearchText(text)}
      />
      <DropDownSort />

      <Box padding={10}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal" maxW="100vw">
            <Thead>
              <Tr>
                <Th>Thumbnail</Th>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Channel Name</Th>
                <Th>Published At</Th>
              </Tr>
            </Thead>
            <Tbody maxW="100vw">
              {results.map((result, i) => (
                <Tr key={i}>
                  <Td>
                    <Image src={result.thumbnail_url} borderRadius="10%" />
                  </Td>
                  <Td>{result.name}</Td>
                  <Td>{result.description}</Td>
                  <Td>{result.channel_name}</Td>
                  <Td>{result.published_at}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            // renderOnZeroPageCount={null}
          />
        </Flex>
      </Box>
    </>
  );
}
