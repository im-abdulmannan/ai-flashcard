"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Appbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333", width: "100%" }}>
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
  );
};

export default Appbar;
