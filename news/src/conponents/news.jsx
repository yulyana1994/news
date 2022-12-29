import React from "react";

const News = ({ post, comment }) => {
  return (
    <div className="d-flex flex-column align-items-center  ">
      <div className="border border-primary w-50 p-3 mt-3">
        <h5>{post.title}</h5>
        <p>{post.body}</p>
      </div>

      {/* <div className="border border-primary w-50 p-3 mt-3 mb-3">
        <div>
          {comment.map((el) => (
            <ul key={el.id}>
              <li className="list-group-item">
                <p>
                  {el.name} комментирует: {el.body}
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div> */}
      <button className="btn btn-primary">Вернуться к новостям</button>
    </div>
  );
};

export default News;
