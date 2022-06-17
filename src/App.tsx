import './App.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';


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

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`;

const boxVariants = {
  hover: {scale: 1.5, rotateZ:90},
  click: {scale:1, borderRadius: "100px"},
  // drag: {backgroundColor:"rgb(255, 234, 167)"}
}


function App() {
  const biggerBoxRef = useRef(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag // 드래그 활성화
          dragSnapToOrigin // 드롭 시 중앙으로 돌아오는 프롭(원래 위치로 돌아옴.)
          dragElastic={1} // 드래그 시 당기는 힘
          dragConstraints={biggerBoxRef} // 제약 설정
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          // whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}
export default App;
