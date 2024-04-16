import { useState } from "react";
import Food from "../components/categories/food/Food";
import Energy from "../components/categories/engergy/Energy";
import Habits from "../components/categories/habits/Habits";
import Transportation from "../components/categories/transportation/Transportaion";
import { Typography, Button } from "@mui/material";
import { useTransition, animated } from "@react-spring/web";
import Results from "../components/results/Results";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const categoryComponents = [
    <Transportation key={1} handleNext={handleNext} />,
    <Energy key={2} handleNext={handleNext} />,
    <Food key={3} handleNext={handleNext} />,
    <Habits key={4} handleNext={handleNext} />,
    <Results key={5} />
  ];

  const transitions = useTransition(activeStep, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <>
      {activeStep === 0 && (
        <>
          <Typography variant="h4" gutterBottom>
            Welcome to the Carbon Footprint Survey
          </Typography>
          <Button variant="contained" onClick={handleNext}>
            Start Survey
          </Button>
        </>
      )}
      {activeStep > 0 &&
        transitions((style, item) => (
          <animated.div
            style={{ ...style, position: "absolute", width: "100%" }}
          >
            {categoryComponents[item - 1]}
          </animated.div>
        ))}
    </>
  );
}