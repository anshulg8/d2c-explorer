// src/components/Footer.tsx
import React from "react";
import { Box, Text, Center, Link, IconButton } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box
      bg="white"
      py={4}
      borderTop="1px"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Center>
        <Text fontSize="sm" color="gray.600">
          © {new Date().getFullYear()} D2C Explorer. All rights reserved.
          <Link href="https://twitter.com/anshulg8" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="twitter"
              variant="ghost"
            />
          </Link>
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
