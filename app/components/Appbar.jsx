"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Appbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: (theme) => theme.palette.tangaroa[950],
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <Typography variant="h6" style={{ flexGrow: 1, color: "white" }}>
            BrainBoost Cards
          </Typography>
        </Link>

        <Box display={"flex"} gap={2}>
          <SignedOut>
            <Button color="inherit" href="/sign-in" variant="text">
              Login
            </Button>
            <Button color="inherit" href="/sign-up" variant="text">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <Button color="inherit" href="/flashcards" variant="text">
              My Flashcards
            </Button>
            <UserButton />
          </SignedIn>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
