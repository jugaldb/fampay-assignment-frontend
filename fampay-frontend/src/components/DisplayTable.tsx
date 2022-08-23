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

export default function DisplayTable() {
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

  useEffect(() => {
    fetchResults();
  }, [offset]);
  return (
    <>
      <Box padding={10}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Channel Name</Th>
                <Th>Thumbnail</Th>
              </Tr>
            </Thead>
            <Tbody>
              {results.map((result, i) => (
                <Tr key={i}>
                  <Td>{result.name}</Td>
                  <Td>{result.description}</Td>
                  <Td>{result.channel_name}</Td>
                  <Td>
                    <Image src={result.thumbnail_url} />
                  </Td>
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
