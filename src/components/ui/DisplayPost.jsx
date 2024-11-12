"use client";

import React, { useState } from "react";
import PostPreview from "./posPreview";
import Pagination from "./Pagination";

const DisplayPost = ({ data }) => {
  const maxPostsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * maxPostsPerPage;
  const indexOfFirstPost = indexOfLastPost - maxPostsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(data.length / maxPostsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () =>
    setCurrentPage((prev) => {
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (prev < totalPages) {
        return prev + 1;
      }
      return prev;
    });
  const prevPage = () =>
    setCurrentPage((prev) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentPosts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
      {data.length > maxPostsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
};

export default DisplayPost;
