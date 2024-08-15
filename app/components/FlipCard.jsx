import { Box } from "@mui/material";
import { styled } from "@mui/system";
import anime from "animejs";
import { useState } from "react";

const CardContainer = styled(Box)({
  width: "320px",
  height: "220px",
  borderRadius: "10px",
});

const Card = styled(Box)({
  position: "relative",
  height: "100%",
  width: "100%",
  borderRadius: "10px",
  transformStyle: "preserve-3d",
  transform: "rotateY(0deg)",
  transition: "transform 0.6s",
});

const Front = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  color: "#f2f3f3",
  backgroundColor: "#5b5d6a",
  borderRadius: "10px",
  backfaceVisibility: "hidden",
  textShadow: "1px 2px 3px rgba(255, 255, 255, 0.1)",
  position: "absolute",
  fontSize: "1rem",
  fontWeight: 500,
  padding: "1rem",
});

const Back = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backfaceVisibility: "hidden",
  color: "#2c2c2c",
  backgroundColor: "#9fa1ad",
  textShadow: "1px 2px 3px rgba(0, 0, 0, 0.2)",
  position: "absolute",
  top: 0,
  left: 0,
  fontSize: "1rem",
  fontWeight: 500,
  padding: "1rem",
  transform: "rotateY(180deg)",
});

const FlipCard = ({ flashcard, index }) => {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (playing) return;
    setPlaying(true);

    anime({
      targets: `.card-${index}`,
      scale: [{ value: 1 }, { value: 1.1 }, { value: 1, delay: 100 }],
      rotateY: { value: "+=180", delay: 100 },
      easing: "easeInOutSine",
      duration: 200,
      complete: function () {
        setPlaying(false);
      },
    });
  };

  return (
    <CardContainer onClick={handleClick} aria-readonly>
      <Card className={`card-${index}`}>
        <Front className="front">{flashcard.front}</Front>
        <Back className="back">{flashcard.back}</Back>
      </Card>
    </CardContainer>
  );
};

export default FlipCard;
