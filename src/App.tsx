import './App.css';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  `;


function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  }

  return (
    <Wrapper onClick={toggleClicked}>
      <Grid>
        <Box layoutId='box1'/>
        <Box />
        <Box />
        <Box />
      </Grid>
      <AnimatePresence>
        {clicked ? <Overlay initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }} animate={{ backgroundColor: "rgba(0, 0, 0, .5)"}} exit={{ backgroundColor: "rgba(0, 0, 0, 0)"}}><Box layoutId='box1' style={{ width: 400, height: 200 }} /></Overlay> : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
