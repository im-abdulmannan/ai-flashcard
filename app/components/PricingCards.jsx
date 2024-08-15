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

const PricingCard = () => {
  const handleSubmit = async() => {
    const checkout_session = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        origin: "https://localhost:3000"
      },
    })

    const checkoutSessionJson = await checkout_session.json();

    if(checkoutSessionJson.statusCode === 500) {
      console.error(checkout_session.message)
      return;
    }

    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })

    if(error) {
      console.error("Error:", error.message)
      return;
    }
  }
  return (
    <Container>
      <Box sx={{ my: 6, mx: 5 }}>
        <Typography variant="h2" justifyContent={"center"} display={"flex"}>
          Pricing
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 3,
                border: "1px solid #565656",
                borderColor: "gray",
                borderRadius: 2,
                backgroundColor: "#9fa1ad",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#2c2c2c",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                  }}
                >
                  Basic
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom={4}
                >
                  $10/month
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary="Create 10 Flashcards"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary="Storage Access"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary="Checking Account"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary="API Integration"
                    />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    color: "white",
                    width: "100%",
                    borderRadius: "25px",
                    border: "1px solid #565656",
                    color: "#2c2c2c",
                  }}
                >
                  Subscribe
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 3,
                border: "1px solid #565656",
                borderColor: "gray",
                borderRadius: 2,
                backgroundColor: "#9fa1ad",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#2c2c2c",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                  }}
                >
                  Premium
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom={4}
                >
                  $15/month
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary="Create 10 Flashcards"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary="Storage Access"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary="Checking Account"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary="API Integration"
                    />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    color: "white",
                    width: "100%",
                    borderRadius: "25px",
                    border: "1px solid #565656",
                    color: "#2c2c2c",
                  }}
                  onClick={handleSubmit}
                >
                  Subscribe
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PricingCard;
