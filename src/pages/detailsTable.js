import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Spinner,
} from "@chakra-ui/react";

const DetailsTable = ({ details }) => {
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {details && Object.keys(details).length === 0 ? (
        <div className="loading">
          <Spinner size="xl" />
        </div>
      ) : (
        <div>
          <Heading as="h4" size="lg" mb={"10"} color={"#fff"} mt={"12"}>
            Details{" "}
          </Heading>
          <TableContainer style={{ width: "100%" }} color={"#fff"}>
            <Table variant="simple">
              <TableCaption>Witer {details?.Writer}</TableCaption>
              <Thead color="gray.600">
                <Tr>
                  <Th>Title</Th>
                  <Th>Year</Th>
                  <Th isNumeric>imdbRating</Th>
                  <Th>Released</Th>

                  <Th>Language</Th>

                  <Th>Awards</Th>
                  <Th>Genre</Th>

                  <Th>Runtime</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{details?.Title}</Td>
                  <Td>{details?.Year}</Td>
                  <Td isNumeric>{details?.imdbRating}</Td>
                  <Td>{details?.Released}</Td>
                  <Td>{details?.Language}</Td>
                  <Td>{details?.Awards}</Td>
                  <Td>{details?.Genre}</Td>
                  <Td>{details?.Runtime}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default DetailsTable;
