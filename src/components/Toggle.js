import { useState, useEffect } from "react";
import styled from "styled-components"

const ToggleContainer = styled.div`
  width: 300px;
  height: 30px;
  padding: 5px;
  border-radius: 20px;
  background-color: #b2bec3;
`;
const ToggleContainerInner = styled(ToggleContainer)`
  position: relative;
  display: flex;
  padding: 0;
`;
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-weight: bold;
  color: ${props => props.textColor ? "#2d3436" :  "#636e72" };
  cursor: pointer;
  z-index: 1;
`;
const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-color: whitesmoke;
  transition-property: transform;
  transition-duration: 1s;
  transform: ${props => props.toggle ? null : "translateX(150px)" };
`;

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <ToggleContainer>
      <ToggleContainerInner>
      <Circle toggle={toggle}></Circle>
      <Category textColor={toggle === true} onClick={() => setToggle(true)}>
        <span>기본</span>
      </Category>
      <Category textColor={toggle === false} onClick={() => setToggle(false)}>
        <span>상세</span>
      </Category>
      </ToggleContainerInner>
    </ToggleContainer>
  );
}