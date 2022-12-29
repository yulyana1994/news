import React from "react";
import { Link } from "react-router-dom";

const List = ({ posts }) => {
  return posts.map((el) => (
    <ul className="list-group w-75" key={el.id}>
      <li className="list-group-item">
        <p>users:{el.userId}</p>
        <Link to={`/posts/${el.id}`}>title: {el.title}</Link>
      </li>
    </ul>
  ));
};

export default List;
