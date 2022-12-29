import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import News from "../conponents/news";

const NewsPage = () => {
  const params = useParams();
  const { postsId } = params;
  const [comment, setComment] = useState();

  const [post, setPost] = useState();

  // const postsEndPointId = config.apiEndpoint + "posts/" + postsId;
  // const commentsEndPointId = config.apiEndpoint + "comments/" + postsId;

  // useEffect(() => {
  //   const promiseComment = axios
  //     .get(commentsEndPointId)
  //     .then((res) => setComment(res.data));
  //   const promisePost = axios
  //     .get(postsEndPointId)
  //     .then((res) => setPost(res.data));
  // }, []);

  // useEffect(() => {
  //   const promisePost = axios
  //     .get(postsEndPointId)
  //     .then((res) => setPost(res.data));
  // }, []);

  return (
    <div>{post ? <News post={post} comment={comment} /> : "Loading..."}</div>
  );
};

export default NewsPage;
