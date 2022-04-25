import { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  position: relative;
  width: 400px;
  height: 50px;
`;
const SlideBar = styled.div`
  position: absolute;
  bottom: -3px;
  left: ${props => props.left * 33.3}%;
  width: 33.3%;
  height: 3px;
  background-color: #2e86de;
  transition: all .3s;
`;
const Ul = styled.ul`
  position: aboslute;
  left: 0;
  display: flex;
  width: 400px;
  height: 50px;
  border-bottom: 3px solid #c8d6e5;
`;
const Li = styled.li`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;
  height: 100%;
  font-weight: bold;
  color: ${props => props.textColor ? "black" : "#8395a7"};
  cursor: pointer;
  transition: all .3s;
`;

export default function Tab() {
  const [toggle, setToggle] = useState(0);
  const tabArr = ["짜장면", "짬뽕", "군만두"];
  
  return(
    <TabContainer>
      <Ul>
        {tabArr.map((item, index) => (
          <Li key={index} textColor={toggle===index} onClick={() => setToggle(index)}>{item}</Li>
        ))}
      </Ul>
      <SlideBar left={toggle}></SlideBar>
    </TabContainer>
  );
}