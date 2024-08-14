"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Typography
} from "@mui/material";
import PricingCards from "../components/PricingCards";

const page = () => {
  return (
    <Box>
      <Container>
        <Box
          height={"100vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          paddingLeft={10}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#2c2c2c",
              fontSize: "3rem",
              fontWeight: 600,
            }}
            marginBottom={2}
          >
            Rise to <br /> Challenge
          </Typography>
          <Typography variant="p">
            Flashcards for{" "}
            <span style={{ fontWeight: 600 }}>serious learners.</span>
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"wrap"}
            gap={"1rem"}
            paddingTop={5}
          >
            <Button variant="contained">Free Trial</Button>
            <Button variant="outlined">View Pricing</Button>
          </Box>
        </Box>
      </Container>
      <Divider />

      

      <Divider />

      <PricingCards />
    </Box>
  );
};

export default page;
