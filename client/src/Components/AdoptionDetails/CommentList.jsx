import React, { useEffect, useState } from "react";
import { getComments, updateComment } from "./api";
import SingleComment from "./SingleComment";

const CommentList = ({backendComments, setBackendComments, addComment, activeComment, setActiveComment, updateComment, deleteComment}) => {
  const rootComments = backendComments.filter(
    (backendComment) => backendComment?.parentId === null
  );

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setBackendComments(comments);
    };
    fetchComments();
  }, []);
  return (
    <section className="mt-1">
      <h4 className="text-sm font-semibold text-[#565656]">
        {backendComments.length || "0"} Comments
      </h4>
      <div className="flex flex-col justify-start gap-4 mt-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
        {rootComments.map((rootComment) => (
          <SingleComment
            key={rootComment.id}
            rootComment={rootComment}
            currentUserId={"1"}
            replies = {getReplies(rootComment.id)}
            addComment = {addComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </section>
  );
};

export default CommentList;
