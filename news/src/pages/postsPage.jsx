import React from "react";
import { useEffect, useState } from "react";
import List from "../conponents/list";
import Pagination from "../conponents/pagination";
import getAllData from "../utils/request";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const count = posts.length;
  const pageSize = 10;

  // useEffect(() => {
  //   const promise = axios.get(postsEndPoint).then((res) => setPosts(res.data));
  // }, []);

  useEffect(() => {
    getAllData().then((res) => console.log(res));
  }, []);

  console.log(posts);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
  };

  const postsCrop = paginate(posts, currentPage, pageSize);

  return (
    <>
      <h1 className="mb-4">Новости дня:</h1>
      <List posts={postsCrop} />
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default PostsPage;
