import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../../actions/actions";

const CustomCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #bebebe;
  border-radius: 6px;
`;

const CustomCardTop = styled.div`
  display: flex;
  input {
    width: 20px;
    height: 20px;
  }
`;

const CustomCardText = styled.div`
  input{
    border:none;
    height: 32px;
    width: 100%;
    padding: 0 10px;
    border-radius: 4px;
    outline: none;
  }
`;

const CustomCardAction = styled.div`
  display: flex;
  gap: 6px;
  button {
    border: none;
    padding: 4px 6px;
    border-radius: 4px;
  }
`;

const TodoListItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleUpdateTodo = (id, text) => {
    if(text.length < 2){
      return;
    }

    dispatch(updateTodo({id: id, text: text}));
    setIsEdit(false);
  }

  return (
    <CustomCard>
      <CustomCardTop>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodo(id))}
        />
      </CustomCardTop>
      <CustomCardText>
        {isEdit ? (
          <input value={editText} onChange={(ev) => setEditText(ev.target.value)} />
        ) : (
          <b className={completed ? "completed-todo" : ""}>{text}</b>
        )}
      </CustomCardText>
      <CustomCardAction>
        {isEdit ? (
          <>
            <button onClick={() => setIsEdit(false)}>Cancel</button>
            <button onClick={() => handleUpdateTodo(id, editText)}>Save</button>
          </>
        ) : (
          <>
            <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
            <button onClick={() => setIsEdit(true)}>Edit</button>
          </>
        )}
      </CustomCardAction>
    </CustomCard>
  );
};

export default TodoListItem;
