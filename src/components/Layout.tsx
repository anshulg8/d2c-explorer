// src/components/Layout.tsx
import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* <Header /> */}
      <Box flex="1" p={4}>
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
