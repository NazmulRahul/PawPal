import React, { useEffect, useState } from "react";
import { getComments, updateComment } from "./api";
import SingleComment from "./SingleComment";

const CommentList = ({addComment, activeComment, setActiveComment, updateComment, deleteComment, dispatch, getAllComments, postId, allComments}) => {
  const rootComments = allComments.filter(
    (allComment) => allComment?.parentId === null
  );
  console.log(allComments, "allcomments")
  const getReplies = (commentId) =>
    allComments
      .filter((allComment) => allComment.parentId === commentId)
      // .sort(
      //   (a, b) =>
      //     new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      // );
  useEffect(() => {
    const fetchComments = async () => {
      try {
        dispatch(getAllComments(postId))
      } catch (error) {
        console.log(error)
      }
    }
    fetchComments()
  }, [dispatch, getAllComments, postId]);
  return (
    <section className="mt-1">
      <h4 className="text-sm font-semibold text-[#565656]">
        {allComments.length || "0"} Comments
      </h4>
      <div className="flex flex-col justify-start gap-4 mt-8 max-h-[63vh] overflow-y-auto custom-scrollbar">
        {rootComments.map((rootComment) => (
          <SingleComment
            key={rootComment._id}
            rootComment={rootComment}
            currentUserId={"1"}
            replies = {getReplies(rootComment._id)}
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
