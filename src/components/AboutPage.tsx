// src/pages/AboutPage.tsx
import React from "react";
import { Container, Heading, Text, Box, Divider } from "@chakra-ui/react";

const AboutPage: React.FC = () => {
  return (
    <Container maxW="container.md" p={6}>
      <Heading as="h1" mb={6} textAlign="center">
        About Us
      </Heading>

      <Text fontSize="lg" mb={6}>
        Welcome to the world of{" "}
        <strong>Direct-to-Consumer (D2C) brands in India! </strong>
        As the Indian economy rapidly evolves, more and more brands are
        launching D2C offerings, providing customers with better prices, greater
        product selection, and improved customer service. We are dedicated to
        discovering and showcasing innovative D2C brands. We've compiled a list
        of the top 100 D2C brands in India, including established businesses and
        new startups.
      </Text>

      <Box mb={6}>
        <Heading as="h2" size="lg" mb={4}>
          Why D2C Brands?
        </Heading>
        <Text fontSize="md" mb={4}>
          India's direct-to-consumer (D2C) market, projected to reach $100
          billion by 2025, has experienced exponential growth in recent years.
          Factors such as the Covid pandemic, increased internet penetration,
          digital infrastructure growth, and the rise of millennials have fueled
          this growth.
        </Text>
        <Text fontSize="md">
          Home to more than 190 million digital shoppers, India boasts the
          world's third-largest online shopping base. This burgeoning ecosystem
          presents a lucrative opportunity for new-age D2C brands to tap into
          the growing appetite of Indian consumers for innovation.
        </Text>
      </Box>

      <Divider my={6} />

      <Box>
        <Heading as="h2" size="lg" mb={4}>
          Industry Insights
        </Heading>
        <Text fontSize="md" mb={4}>
          Fashion and clothing startups hold the highest potential, with
          expectations to grow to $43.2 billion by 2025, according to an Inc42
          report.
        </Text>
        <Text fontSize="md">
          Some emerging D2C brands like Mamaearth, CaratLane, and Nua have
          achieved remarkable success, reaching the INR 100 crore revenue mark
          in just a few years. This highlights the potential and success of D2C
          brands in India.
        </Text>
      </Box>
    </Container>
  );
};

export default AboutPage;
