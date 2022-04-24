import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import styled from "styled-components";

const Div = styled.div`
  margin: 50px;
`;

function App() {
  return (
    <>
    <Div>
      <Toggle />
    </Div>
    <Div>
      <Tab />
    </Div>
    <Div>
      <Slider />
    </Div>
    <Div>
      <Input />
    </Div>
    <Div>
      <Dropdown />
    </Div>
    </>
  );
}

export default App;
