"use client";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Appbar from "./components/Appbar";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import PricingCards from "./components/PricingCards";

export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <Appbar />
      <Container>
        <Box
          height={"50vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          paddingLeft={20}
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
            <Button
              variant="contained"
              onClick={() => router.push("/generate")}
            >
              Get Started
            </Button>
            <Link href="#pricing">
              <Button variant="outlined">View Pricing</Button>
            </Link>
          </Box>
        </Box>
      </Container>

      <Divider />
      <FeatureCards />

      <Divider />
      <Box id="pricing">
        <PricingCards />
      </Box>
      <Footer />
    </Box>
  );
}
