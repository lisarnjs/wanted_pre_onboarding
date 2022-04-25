import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  box-sizing: border-box;
  width: 400px;
  height: 250px;
  padding: 10px;
  background-color: #f1f2f6;
`;
const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;
const InputBox = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40%;
  margin-top: 5px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #ced6e0;
  font-size: 16px;

  &::placeholder {
    color: #ced6e0;
  }
`;
const Check = styled.div`
  position: absolute;
  top: 35%;
  right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.color};
  cursor: pointer;
  span {
    font-size: 20px;
    color: white;
  }
`;
const Invalid = styled.span`
display: ${props => props.value==="" ? "none" : "block"};
font-size: 14px;
color: tomato;
`;
const Show = styled(Check)`
span {
  font-size: 20px;
  color: ${props => props.show ? "#079992" :  "#000"};
}
`;

function Input() {
  const [focus, setFocus] = useState();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState(true);
  const [checkColor, setCheckColor] = useState("#dfe4ea");
  const validEmailCheck = (obj) => {
    setValue(obj);
    const pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!pattern.test(obj)) {
      setCheckColor("#dfe4ea");
      setInvalid(false);
    } else {
      setCheckColor("#079992");
      setInvalid(true);
    }
  }
  return(
    <Form>
      <InputContainer>
        <label>E-mail</label>
        <InputBox 
        onClick={() => setFocus(0)} 
        onChange={(e) => validEmailCheck(e.target.value)} 
        type="email" 
        placeholder="E-mail" 
        required />
        <Check color={checkColor}>
          <span class="material-symbols-outlined">check</span>
        </Check>
        {invalid ? null : <Invalid focus={focus} value={value}>Invalid email address.</Invalid>}
      </InputContainer>
      <InputContainer>
        <label>Password</label>
        <InputBox 
        onClick={() => setFocus(1)}
        type={show && focus===1 ? "text" : "password"} 
        placeholder="Password" 
        required />
        <Show onClick={() => setShow(!show)} show={show} color="#fff">
          {show && focus === 1
          ? <span class="material-symbols-outlined">visibility</span>
          : <span class="material-symbols-outlined">visibility_off</span>
          }
        </Show>
      </InputContainer>
    </Form>
  );
}
export default Input;