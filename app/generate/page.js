"use client";

import { useUser } from "@clerk/nextjs";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { db } from "../../firebase.config";
import Appbar from "../components/Appbar";
import FlipCard from "../components/FlipCard";

export default function Generate() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [loadings, setLoadings] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoadings(true);
    fetch("/api/generate", {
      method: "POST",
      body: text,
    })
      .then((res) => res.json())
      .then((data) => {
        setFlashcards(data);
        setLoadings(false);
      });
  };

  const saveFlashcards = async () => {
    if (!user) {
      alert("Please sign in to save your flashcards.");
      return;
    }
    if (!name) {
      alert("Please enter a name for your flashcards.");
      return;
    }

    const batch = writeBatch(db);
    const userDocRef = doc(collection(db, "users"), user.id);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const collections = docSnap.data().flashcards || [];
      if (collections.find((f) => f.name === name)) {
        alert("Flashcards with the same name already exists.");
        return;
      } else {
        collections.push({ name });
        batch.set(userDocRef, { flashcards: collections }, { merge: true });
      }
    } else {
      batch.set(userDocRef, { flashcards: [{ name }] });
    }

    const colRef = collection(userDocRef, name);
    flashcards.forEach((flashcard) => {
      const cardDocRef = doc(colRef);
      batch.set(cardDocRef, flashcard);
    });

    await batch.commit();
    router.push("/flashcards");
  };

  return (
    <Box>
      <Appbar />
      <Container>
        <Box
          sx={{
            mt: 4,
            mb: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Generate Flashcards</Typography>
          <Paper sx={{ p: 4, width: "100%" }}>
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Enter Text"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              disabled={loadings}
            >
              Submit
            </Button>
          </Paper>

          {loadings && (
            <Typography variant="h6" component="h2" gutterBottom>
              Generating flashcards...
            </Typography>
          )}

          {flashcards.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Generated Flashcards
              </Typography>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Enter Name"
                rows={4}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button variant="contained" onClick={saveFlashcards}>
                Save
              </Button>
              <Grid container spacing={2}>
                {flashcards.map((flashcard, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <FlipCard flashcard={flashcard} index={index} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
