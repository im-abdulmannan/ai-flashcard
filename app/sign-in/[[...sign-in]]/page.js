import { SignIn } from "@clerk/nextjs";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";

export default function SignInPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#333",
          marginBottom: 4,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              color: "white",
            }}
          >
            Flashcard SaaS
          </Typography>
          <Button color="inherit">
            <Link
              href="/sign-in"
              passHref
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/sign-up"
              passHref
              style={{ color: "white", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#222",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: 2, fontWeight: "bold", color: "white" }}
        >
          Sign In
        </Typography>
        <Box sx={{ width: "100%", maxWidth: "400px" }}>
          <SignIn />
        </Box>
      </Box>
    </Container>
  );
}
