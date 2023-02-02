import { Fragment } from "react";
import { Heading, Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const MainPage = ({ property, movieState }) => {
  console.log("here is the movies state", movieState);
  return (
    <Fragment>
      <Heading as="h4" size="lg" mb={"10"} color={"#fff"} mt={"12"}>
        Movies Listings{" "}
      </Heading>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          marginBottom: "25px",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "10px 0 10px 0",
        }}
      >
        {movieState && movieState.length > 0
          ? movieState.map((eachMovie) => {
              return (
                <Box
                  className="cardImage"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Link to={`/details/${eachMovie.imdbID}`}>
                    <Image
                      src={eachMovie.Poster}
                      alt={property.imageAlt}
                      style={{ width: "100%", maxHeight: "295px" }}
                    />

                    <Box p="6">
                      <Box display="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          New
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          Type &bull; {eachMovie.Type}
                        </Box>
                      </Box>

                      <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        noOfLines={1}
                        color="gray.500"
                      >
                        {eachMovie.Title}
                      </Box>

                      <Box color="gray.500">Year {eachMovie.Year}</Box>

                      <Box display="flex" mt="2" alignItems="center">
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={
                                i < property.rating ? "teal.500" : "gray.300"
                              }
                            />
                          ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                          {property.reviewCount} reviews
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              );
            })
          : "NO DATA"}
      </div>
    </Fragment>
  );
};

export default MainPage;
