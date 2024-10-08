"use client";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Link from "next/link";
import Appbar from "./components/Appbar";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import PricingCards from "./components/PricingCards";

export default function Home() {
  return (
    <Box>
      <Appbar />
      <Container>
        <Box
          height={"70vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          paddingLeft={"15%"}
        >
          <Typography variant="h1" gutterBottom>
            Rise to <br /> Challenge
          </Typography>
          <Typography variant="h3">
            Flashcards for{" "}
            <span style={{ fontWeight: 600 }}>Future Engineers.</span>
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"wrap"}
            gap={"1rem"}
            paddingTop={5}
          >
            <Link href="/generate">
              <Button variant="contained">Get Started</Button>
            </Link>
            <Link href="#pricing">
              <Button variant="outlined">View Pricing</Button>
            </Link>
          </Box>
        </Box>
      </Container>
      <FeatureCards />
      <Divider />
      <Box id="pricing">
        <PricingCards />
      </Box>
      <Footer />
    </Box>
  );
}
