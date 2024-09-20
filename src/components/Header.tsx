// src/components/Header.tsx
import React from "react";
import { Box, Flex, Heading, Button, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Box
      bg="white"
      px={6}
      py={4}
      boxShadow="sm"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex align="center">
        <Link to="/">
          <Heading size="lg" color="black">
            D2C Explorer
          </Heading>
        </Link>
        <Spacer />
        <Flex>
          <Button as={Link} to="/about" variant="ghost" size="md" color="black">
            About
          </Button>
          <Button
            as={Link}
            to="/submit"
            variant="ghost"
            size="md"
            color="black"
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
