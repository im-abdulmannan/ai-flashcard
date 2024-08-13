'use client'
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const gotoHome = () => {
    router.push("/home");
  }
  
  useEffect(() => {
    setTimeout(() => {
      gotoHome();
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      <Typography variant="h1">Welcome to Gemini AI Flashcard</Typography>
      <Typography variant="p">Create and manage flashcards with ease.</Typography>
    </Box>
  );
}
