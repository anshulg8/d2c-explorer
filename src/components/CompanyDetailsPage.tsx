import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Center,
  Tag,
  Wrap,
  WrapItem,
  VStack,
  HStack,
  Grid,
  Card,
  CardBody,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { FaGlobe, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Company, sampleData } from "../data";

// Helper function to find related companies based on shared categories
const findRelatedCompanies = (company: Company, allCompanies: Company[]) => {
  const relatedCompanies = allCompanies.filter((otherCompany) => {
    return (
      otherCompany.id !== company.id &&
      otherCompany.categories.some((category) =>
        company.categories.includes(category)
      )
    );
  });
  return relatedCompanies.slice(0, 5); // Limit to 5 related companies
};

const CompanyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const company = sampleData.find(
    (company: Company) => company.id.toString() === id
  );

  if (!company) {
    return (
      <Center h="100vh">
        <Box p={4}>
          <Heading>Company not found</Heading>
        </Box>
      </Center>
    );
  }

  const relatedCompanies = findRelatedCompanies(company, sampleData);

  return (
    <Container maxW="container.lg" p={6}>
      {/* Company Name */}
      <Heading
        as="h1"
        textAlign="center"
        mb={4}
        fontSize="3xl"
        fontWeight="bold"
      >
        {company.name}
      </Heading>

      {/* Description */}
      <Text fontSize="lg" mb={6} textAlign="center" lineHeight="1.5">
        {company.description}
      </Text>

      {/* Categories */}
      <Wrap spacing={2} mb={6} justify="center">
        {company.categories.map((category: string, index: number) => (
          <WrapItem key={index}>
            <Tag bgColor="#CAF0F8" color="black" variant="solid">
              {category}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>

      {/* Visit Website Button */}
      <Center mb={8}>
        <Button
          as="a"
          href={`${company.website}?ref=d2cExplorer`}
          colorScheme="blue"
          target="_blank"
          rel="noopener noreferrer"
          leftIcon={<FaGlobe />}
          size="lg"
          fontSize="md"
          py={6}
        >
          Visit Website
        </Button>
      </Center>

      {/* Additional Information */}
      <VStack spacing={6} align="stretch" mb={8}>
        <Box>
          <Center mb={6}>
            <HStack spacing={4}>
              <IconButton
                as="a"
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaFacebook />}
                size="xs"
                aria-label="Facebook"
                colorScheme="facebook"
              />
              <IconButton
                as="a"
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaTwitter />}
                size="xs"
                aria-label="Twitter"
                colorScheme="twitter"
              />
              <IconButton
                as="a"
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaInstagram />}
                size="xs"
                aria-label="Instagram"
                colorScheme="pink"
              />
            </HStack>
          </Center>
        </Box>
      </VStack>

      {/* Related Companies */}
      <Box mt={8}>
        <Divider mb={6} />
        <Heading as="h2" size="lg" mb={4}>
          Other Similar Companies
        </Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {relatedCompanies.map((relatedCompany) => (
            <Link
              to={`/companies/${relatedCompany.id}`}
              key={relatedCompany.id}
            >
              <Card
                variant="outline"
                borderRadius="md"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <CardBody
                  p={4}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Heading size="md" mb={2}>
                    {relatedCompany.name}
                  </Heading>
                  <Text
                    fontSize="sm"
                    noOfLines={2}
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {relatedCompany.description}
                  </Text>
                  <Wrap spacing={2} mt={4} justify="center">
                    {relatedCompany.categories.map((category, index) => (
                      <WrapItem key={index}>
                        <Tag bgColor="#CAF0F8" color="black" variant="solid">
                          {category}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </CardBody>
              </Card>
            </Link>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CompanyDetailsPage;
