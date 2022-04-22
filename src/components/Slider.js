import { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 400px;
  height: 150px;
  padding: 5px;
`;
const ValueBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  padding-top: 25px;
  padding-right: 20px;
  border: 2px solid #dfe4ea;
  border-radius: 5px;
  background-color: #f1f2f6;
  text-align: right;
`;
const SliderBox = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;
const Input = styled.input`
  position: absolute;
  top: 40%;
  left: 2.5%;
  -webkit-appearance: none;
  appearance: none;
  width: 95%;
  height: 10%;
  border-radius: 20px;
  background: #f1f2f6;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  overflow: hidden;

  &::-webkit-slider-thumb {
    -webkit-appearance: none; 
    width: 10px; 
    height: 10px; 
    background: #2ed573; 
    box-shadow: -100vw 0 0 100vw #7bed9f; 
    cursor: pointer;
  }
`;
const Ul = styled.ul`
  position: absolute;
  left: 2.5%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 95%;

  li {
    width: 12%;
    border-radius: 10px;
    background-color: #f1f2f6;
    text-align: center;
    cursor: pointer;
  }
`;

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(1);
  const ranges = [1, 25, 50, 75, 100];
  
  return(
    <SliderContainer>
      <ValueBox>
        <span>{sliderValue}%</span>
      </ValueBox>
      <SliderBox>
        <Input 
        onChange={(event) => setSliderValue(event.target.value)} 
        value={sliderValue} 
        type="range" 
        min="1" 
        max="100"   
        />
        <Ul>
          {ranges.map((range) => 
          <li onClick={() => setSliderValue(range)}>
            <span>{range}%</span>
          </li>)}
        </Ul>
      </SliderBox>
    </SliderContainer>
  );
}