"use client";

import { db } from "@/firebase.config";
import { useUser } from "@clerk/nextjs";
import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import { collection, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return;
      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const flashcards = docSnap.data().flashcards || [];
        setFlashcards(flashcards);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashcards();
  }, [user]);

  const handleClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };

  if (!isLoaded && !isSignedIn) return <div>Loading...</div>;
  return <Container maxWidth="md">
  <Grid container spacing={3} sx={{ mt: 4 }}>
    {flashcards.map((flashcard, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card>
          <CardActionArea onClick={() => handleClick(flashcard.name)}>
            <CardContent>
              <Typography variant="h5" component="div">
                {flashcard.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ))}
  </Grid>
</Container>
};

export default Page;
