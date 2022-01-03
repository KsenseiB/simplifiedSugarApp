import React from "react";

const TodoLists = ({ todoInfos, editHandler, deleteHandler }) => {
  const { _id, title, description } = todoInfos;

  return (
    <>
      <hr />
      <li key={ _id }>
        <div className="title-description">
          <p>сахар: { title }</p>
          {/* <h1></h1> */ }
          <p>лантус: { description }</p>
        </div>
        {/* <h1></h1> */ }
        <div className="todo-btn-container">
          <button className="todo-btn" name={ _id } onClick={ editHandler }>
            Изменять
          </button>
          <button className="todo-btn" name={ _id } onClick={ deleteHandler }>
            Удалить
          </button>
        </div>
      </li>

    </>
  );
};

export default TodoLists;
