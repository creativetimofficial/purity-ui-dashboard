// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import Products from "./components/Products";
import { tablesTableData, dashboardTableData } from "variables/general";


function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Products
        title={"Products Table"}
        captions={["Image", "Title", "SKU", "Price", "Actions"]}
        // data={productsData}
      />
      <Authors
        title={"Authors Table"}
        captions={["Author", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
      />
      <Projects
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Tables;
