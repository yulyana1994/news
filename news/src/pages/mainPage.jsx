import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./../conponents/list";
import config from "../config.json";
import Pagination from "../conponents/pagination";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsEndPoint = config.apiEndpoint + "posts";
  const count = posts.length;
  const pageSize = 10;

  useEffect(() => {
    const promise = axios.get(postsEndPoint).then((res) => setPosts(res.data));
  }, []);

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
      {posts ? <List posts={postsCrop} /> : "Loading..."}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default MainPage;
