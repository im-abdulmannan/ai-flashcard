import { Check } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const PricingCard = () => {
  return (
    <Container>
      <Box sx={{ my: 6, mx: 5 }}>
        <Typography
          variant="h2"
          marginBottom={5}
          justifyContent={"center"}
          display={"flex"}
        >
          Pricing
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Card sx={{ minWidth: "30%" }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  color: "#2c2c2c",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                }}
              >
                Basic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $10/month
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary="Create 10 Flashcards" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary="Storage Access" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary="Checking Account" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary="API Integration" />
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

          <Card sx={{ minWidth: "30%" }}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  color: "#2c2c2c",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                }}
              >
                Premium
              </Typography>
              <Typography variant="body2" color="text.secondary">
                $10/month
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary="Create 10 Flashcards" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary="Storage Access" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary="Checking Account" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  <ListItemText primary="API Integration" />
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
        </Box>
      </Box>
    </Container>
  );
};

export default PricingCard;
