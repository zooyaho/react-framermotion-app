import './App.css';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// -800 -> scale 2, 0 -> scale 0, 800-> scale 0.5
function App() {
  const x = useMotionValue(0);
  const scaleValue = useTransform(x,[-800,0,800],[2,1,0]);
  useEffect(()=>{scaleValue.onChange(()=>{console.log(scaleValue.get());})},[scaleValue]);
  return (
    <Wrapper>
      <Box
        drag="x"
        style={{x, scale: scaleValue}}
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
