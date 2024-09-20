import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Container,
  VStack,
  Heading,
  Grid,
  Card,
  CardBody,
  Wrap,
  WrapItem,
  Tag,
  Text,
  Button,
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Company, sampleData } from "../data";

// Helper function to get sections for alphabetical pagination
const getSections = (companies: Company[]) => {
  const sections = new Map<string, HTMLElement>();
  companies.forEach((company) => {
    const firstLetter = company.name[0].toUpperCase();
    if (!sections.has(firstLetter)) {
      sections.set(firstLetter, null!);
    }
  });
  return Array.from(sections.keys()).sort();
};

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());

  const categories = useMemo(() => {
    const allCategories = sampleData.flatMap(
      (company: Company) => company.categories
    );
    return Array.from(new Set(allCategories)).sort(); // Remove duplicates and sort
  }, []);

  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));

  const filteredCompanies = useMemo(() => {
    return sampleData.filter((company: Company) => {
      const matchesSearch = company.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((category) =>
          company.categories.includes(category)
        );
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  const sections = useMemo(
    () => getSections(filteredCompanies),
    [filteredCompanies]
  );

  const handleScrollToSection = (letter: string) => {
    const section = sectionsRef.current.get(letter);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Responsive button size (changes based on the screen size)
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  // Scroll event listener to show "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Quick Filter logic
  const popularCategories = [
    "Clothing & Apparel",
    "Beauty & Personal Care",
    "Food & Beverages",
    "Electronics",
    "Shark Tank",
  ];
  const handleQuickFilter = (category: string) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" mb={6} textAlign="center">
          Discover Indian D2C Brands
        </Heading>

        <Text fontSize="lg" mb={6} textAlign="center">
          Total Companies: {filteredCompanies.length}
        </Text>

        {/* Search Bar */}
        {/* <Input
          placeholder="Search brands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mb={6}
          size="lg"
        /> */}

        {/* Quick Filters */}
        <VStack align="stretch" mb={6}>
          <Heading as="h3" size="md">
            Quick Filters:
          </Heading>
          <Wrap spacing={2}>
            {popularCategories.map((category) => (
              <Button
                key={category}
                size="sm"
                bgColor={
                  selectedCategories.includes(category) ? "#00B4D8" : "#CAF0F8"
                }
                color={
                  selectedCategories.includes(category) ? "white" : "black"
                }
                _hover={{
                  bgColor: selectedCategories.includes(category)
                    ? "#00B4D8"
                    : "#CAF0F8",
                  color: selectedCategories.includes(category)
                    ? "white"
                    : "black",
                }}
                onClick={() => handleQuickFilter(category)}
              >
                {category}
              </Button>
            ))}
          </Wrap>
        </VStack>

        {/* Category Filter */}
        <VStack align="stretch" mb={6}>
          <Heading as="h3" size="md">
            Filter by Categories:
          </Heading>
          <Select
            isMulti
            options={categoryOptions}
            onChange={(selectedOptions) =>
              setSelectedCategories(
                (selectedOptions || []).map((option) => option.value)
              )
            }
            value={categoryOptions.filter((option) =>
              selectedCategories.includes(option.value)
            )}
            placeholder="Select categories"
          />
        </VStack>

        {/* Alphabetical Pagination */}
        <Wrap spacing={2} mb={6} justify="center">
          {sections.map((letter) => (
            <Button
              key={letter}
              onClick={() => handleScrollToSection(letter)}
              size={buttonSize} // Responsive button size
              width={{ base: "40px", md: "50px" }} // Button width adjusts for mobile
            >
              {letter}
            </Button>
          ))}
        </Wrap>

        {/* Company Cards */}
        <VStack spacing={6} align="stretch">
          {sections.map((letter) => (
            <Box
              key={letter}
              ref={(el) => sectionsRef.current.set(letter, el!)}
              mt={4}
            >
              <Heading as="h3" size="lg" mb={4}>
                {letter}
              </Heading>
              <Grid
                templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
                gap={6}
              >
                {filteredCompanies
                  .filter((company) => company.name[0].toUpperCase() === letter)
                  .map((company) => (
                    <Link to={`/companies/${company.id}`} key={company.id}>
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
                            {company.name}
                          </Heading>
                          <Text
                            fontSize="sm"
                            mb={4}
                            noOfLines={3} // Truncate after 3 lines
                            overflow="hidden"
                            textOverflow="ellipsis"
                            maxHeight="60px" // Adjust based on your needs
                          >
                            {company.description}
                          </Text>
                          <Wrap spacing={2} mt={4} justify="center">
                            {company.categories.map(
                              (category: string, index: number) => (
                                <WrapItem key={index}>
                                  <Tag
                                    bgColor="#CAF0F8"
                                    color="black"
                                    variant="subtle"
                                  >
                                    {category}
                                  </Tag>
                                </WrapItem>
                              )
                            )}
                          </Wrap>
                        </CardBody>
                      </Card>
                    </Link>
                  ))}
              </Grid>
            </Box>
          ))}
        </VStack>
      </VStack>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <IconButton
          icon={<ArrowUpIcon />}
          position="fixed"
          bottom="20px"
          right="20px"
          size="md"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        />
      )}
    </Container>
  );
};

export default HomePage;
