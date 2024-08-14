import {
    Box,
    Container,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "justify",
  color: theme.palette.text.secondary,
  minHeight: "256px",
}));

const FeatureCards = () => {
  return (
    <Container>
      <Box sx={{ my: 6, mx: 5 }}>
        <Typography
          variant="h2"
          marginBottom={5}
          justifyContent={"center"}
          display={"flex"}
        >
          Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item>
              <Typography variant="h4" textAlign={"center"} marginY={3}>
                Easy to use
              </Typography>
              <Typography variant="p">
                Our intuitive design allows users to effortlessly create,
                organize, and manage flashcards, ensuring a seamless experience
                for efficient study and review.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <Typography variant="h4" textAlign={"center"} marginY={3}>
                Powerful Search
              </Typography>
              <Typography variant="p">
                Easily sort and filter your flashcards by specific categories,
                terms, or definitions, allowing for focused study sessions and
                quick access to relevant content.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <Typography variant="h4" textAlign={"center"} marginY={3}>
                Customizable Learning
              </Typography>
              <Typography variant="p">
                Design personalized learning paths tailored to your specific
                study goals, ensuring a structured and effective approach to
                mastering new material.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FeatureCards;
