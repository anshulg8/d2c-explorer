// src/pages/SubmitPage.tsx
import React, { useState } from "react";
import {
  Container,
  Heading,
  Text,
  Box,
  Spinner,
  VStack,
  Center,
} from "@chakra-ui/react";

const SubmitPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleFormLoad = () => {
    setLoading(false);
  };

  return (
    <Container maxW="container.lg" p={6}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" mb={4}>
          Suggest a Brand or Product
        </Heading>
        <Text fontSize="lg" mb={4}>
          If you know of any D2C brands or products that you'd like to see
          featured on our platform, please let us know! Fill out the form below
          to submit your suggestions.
        </Text>

        {/* Loader */}
        {loading && (
          <Center h="100vh">
            <Spinner size="xl" />
          </Center>
        )}

        {/* Embed Google Form */}
        <Box display={loading ? "none" : "block"}>
          <iframe
            src="https://forms.gle/EcwfoahN1GA1eu1h6"
            width="100%"
            height="1000"
            title="Submit Form"
            onLoad={handleFormLoad} // Handle form load
          >
            Loading…
          </iframe>
        </Box>
      </VStack>
    </Container>
  );
};

export default SubmitPage;
