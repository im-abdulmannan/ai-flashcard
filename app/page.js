"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Appbar from "./components/Appbar";
import FeatureCards from "./components/FeatureCards";
import PricingCard from "./components/PricingCards";

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
            <Button
              variant="contained"
              sx={{
                backgroundColor: "gray",
                color: "#2c2c2c",
                "&:hover": {
                  backgroundColor: "#5b5d6a",
                  color: "#fafafa",
                },
              }}
              onClick={() => router.push("/generate")}
            >
              Get Started
            </Button>
            <Link href="#pricing">
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#5b5d6a",
                  color: "#5b5d6a",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#2c2c2c",
                    border: "1px solid #2c2c2c",
                  },
                }}
              >
                View Pricing
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>

      <Divider />
      <FeatureCards />

      <Divider />
      <Box id="pricing">
        <PricingCard />
      </Box>
    </Box>
  );
}
