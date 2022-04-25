import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import styled from "styled-components";

const Div = styled.div`
  box-sizing: border-box;
  margin: 50px;
  padding: 30px;
  border: 2px solid #a4b0be;
  border-radius: 10px;
`;
const H2 = styled.h2`
  margin-bottom: 20px;
`;

function App() {
  return (
    <>
    <Div>
      <H2>Toggle.js</H2>
      <Toggle />
    </Div>
    <Div>
      <H2>Tab.js</H2>
      <Tab />
    </Div>
    <Div>
      <H2>Slider.js</H2>
      <Slider />
    </Div>
    <Div>
      <H2>Input.js</H2>
      <Input />
    </Div>
    <Div>
      <H2>Dropdown.js</H2>
      <Dropdown />
    </Div>
    </>
  );
}

export default App;
