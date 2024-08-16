import getStripe from "@/utils/get-stripe";
import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const PricingCards = () => {
  const handleSubmit = async () => {
    const checkout_session = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        origin: "https://localhost:3000",
      },
    });

    const checkoutSessionJson = await checkout_session.json();

    if (checkoutSessionJson.statusCode === 500) {
      console.error(checkout_session.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.error("Error:", error.message);
      return;
    }
  };
  return (
    <Container>
      <Box sx={{ my: 6, mx: 5 }}>
        <Typography
          variant="h1"
          justifyContent={"center"}
          display={"flex"}
          color={(theme) => theme.palette.tangaroa[950]}
        >
          Pricing
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <PricingCard
              title="Basic"
              price="$0.00/month"
              features={[
                "Create 10 Flashcards",
                "Storage Access",
                "Checking Account",
                "API Integration",
              ]}
              onClick={handleSubmit}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PricingCard
              title="Premium"
              price="$10.00/month"
              features={[
                "Create Unlimited Flashcards",
                "Storage Access",
                "Checking Account",
                "API Integration",
              ]}
              onClick={handleSubmit}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PricingCards;

const PricingCard = ({ title, price, features, onClick }) => {
  return (
    <Card
      sx={{
        p: 3,
        border: (theme) => `1px solid ${theme.palette.tangaroa[900]}`,
        borderRadius: 2,
        backgroundImage: (theme) =>
          `linear-gradient(to bottom, ${theme.palette.tangaroa[400]}, ${theme.palette.tangaroa[300]})`,
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography variant="h2" gutterBottom>{title}</Typography>
        <Typography color="text.secondary" variant="h4" marginBottom={4}>
          {price}
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              <ListItemText sx={{ color: "black" }} primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          borderradius={5}
          onClick={onClick}
        >
          Subscribe
        </Button>
      </CardActions>
    </Card>
  );
};
