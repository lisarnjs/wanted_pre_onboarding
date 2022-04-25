import { useState, useEffect } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 350px;
  padding: 15px;
  background-color: #f1f2f6;
`;
const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10%;

  input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 12px;
    border: 1px solid #ced6e0;
    border-radius: 5px;
  }

  span {
    position: absolute;
    top: 5px;
    right: 0;
    cursor: pointer;
  }
`;
const SelectList = styled.div`
  display: ${props => props.drop ? "block" : "none"};
  width: 100%;
  height: 90%;
  margin-top: 10px;
  border: 1px solid #ced6e0;
  border-radius: 5px;
  background-color: whitesmoke;
  
  ul {
    height: 80%;
    padding: 10px 40px;
    border-top: 1px solid #ced6e0;
    background-color: #fff;
    overflow: scroll;
    &::-webkit-scrollbar {
     display: none;
    }
    li {
      height: 40px;
      cursor: pointer;
    }
  }
`;
const SearchDiv = styled.div`
  position: relative;
  display: flex;
  height: 40px;

  span {
    position: absolute;
    top: 10px;
    left: 12px;
    font-size: 20px;
    color: #a4b0be;
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 40px;
    border: none;
    border-radius: 5px;
  }
`;

function Dropdown() {
  const items = [
    "All", 
    "KwonEunseo", 
    "kwonenseo@gmail.com", 
    "Front-end", 
    "Developer", 
    "Full-stack",
    "KwonEunseo", 
    "kwonenseo@gmail.com", 
    "Front-end", 
    "Developer", 
    "Full-stack",
    "KwonEunseo", 
    "kwonenseo@gmail.com", 
    "Front-end", 
    "Developer", 
    "Full-stack"
  ];
  const [select, setSelect] = useState(items[0]);
  const [drop, setDrop] = useState(false);
  const [search, setSearch] = useState("");

  return(
    <DropdownContainer>
      <SelectContainer>
        <input type="text" value={select} />
        <span onClick={() => setDrop(!drop)} class="material-symbols-outlined">arrow_drop_down</span>
      </SelectContainer>
      
      <SelectList  drop={drop}>
        <SearchDiv>
        <span class="material-symbols-outlined">search</span>
        <input 
        onChange={(e) => setSearch(e.target.value)} 
        value={search}
        type="text" 
        placeholder="Search" 
        />
        </SearchDiv>
        <ul>
        {items.filter((x) => {
          if(search===""){
            return x;
          } else if (x.toLowerCase().includes(search.toLowerCase())) {
            return x;
          }
        }).map(item => {
          return (
            <li onClick={() => setSelect(item)}>{item}</li>
          )
        })}
        </ul>
      </SelectList>
     
      
    </DropdownContainer>
  );
}
export default Dropdown;