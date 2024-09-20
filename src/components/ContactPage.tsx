// src/pages/ContactPage.tsx
import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";

const ContactPage: React.FC = () => {
  return (
    <Container maxW="container.md" p={6}>
      <Heading as="h1" mb={4}>
        Contact Us
      </Heading>
      <Text fontSize="lg">
        {/* Add contact information here */}
        Feel free to reach out to us at contact@d2cexplorer.com.
      </Text>
    </Container>
  );
};

export default ContactPage;
