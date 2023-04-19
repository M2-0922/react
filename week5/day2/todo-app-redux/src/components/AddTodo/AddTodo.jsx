import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../actions/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const CustomContainer = styled.div`
  position: relative;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #b3b3b3;
  border-radius: 6px;
  padding: 0 12px;
  font-size: 16px;
`;

const CustomButton = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  height: 26px;
  padding: 4px 12px;
  border-radius: 4px;
  border: none;
`;

const AddTodo = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    let { value } = inputRef.current;
    if (value.length < 2) {
      return;
    }
    const data = {
      id: uuidv4(),
      text: value,
      completed: false,
    };
    dispatch(addTodo(data));
    inputRef.current.value = "";
  };
  
  return (
    <CustomContainer>
      <CustomInput type="text" ref={inputRef} />
      <CustomButton onClick={handleClick}>Add</CustomButton>
    </CustomContainer>
  );
};

export default AddTodo;
