import React from "react";

const List = ({ posts }) => {
  return posts.map((el) => (
    <ul className="list-group" key={el.id}>
      <li className="list-group-item">
        <p>users:{el.userId}</p>
        <h5>title: {el.title}</h5>
      </li>
    </ul>
  ));
};

export default List;
