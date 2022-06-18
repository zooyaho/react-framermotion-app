import './App.css';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: linear-gradient(135deg,#e09,#d0e);
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
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(x, [-800, 0, 800], 
    [
      "linear-gradient(135deg,rgb(0,210,238),rgb(0,83,238))", 
      "linear-gradient(135deg,rgb(238,0,153),rgb(221,0,238))", 
      "linear-gradient(135deg,rgb(0,238,155),rgb(238,238,0))"
    ])

  return (
    <Wrapper style={{ x, background: gradient }}>
      <Box
        drag="x"
        style={{ x, rotateZ }}
        dragSnapToOrigin
        dragElastic={1}
      />
    </Wrapper>
  );
}

export default App;
