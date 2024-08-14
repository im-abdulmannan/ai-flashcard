"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: 4,
        paddingTop: 0,
      }}
    >
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create Flashcard from your Text." />
      </Head>

      {/* AppBar that sticks to the top */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#333", marginBottom: 4 }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: "white" }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">
              Login
            </Button>
            <Button color="inherit" href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, color: "gray" }}>
          The Easiest way to make flashcards from your text.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4, padding: 1.5 }}
        >
          Get Started
        </Button>
      </Box>

      <Box sx={{ my: 8, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography sx={{ color: "gray" }}>
              Simply input your text and let our software do the rest. Creating
              flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcard</Typography>
            <Typography sx={{ color: "gray" }}>
              Our AI intelligently breaks down your text into concise
              flashcards, perfect for studying.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography sx={{ color: "gray" }}>
              Access your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 8, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Pricing
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "gray",
                borderRadius: 2,
                backgroundColor: "#222",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Free Plan</Typography>
              <Typography sx={{ color: "gray", mb: 2 }}>
                Access basic features with limited storage.
              </Typography>
              <Button variant="contained" color="primary">
                Select
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "gray",
                borderRadius: 2,
                backgroundColor: "#222",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Pro Plan</Typography>
              <Typography sx={{ color: "gray", mb: 2 }}>
                Unlock advanced features and unlimited storage.
              </Typography>
              <Button variant="contained" color="primary">
                Select
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
