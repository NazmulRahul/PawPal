import React, { useState } from "react";
import { pets } from "../Adoption/pets";
import { useParams } from "react-router-dom";
import { Separator } from "../ui/separator";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { createComment as createCommentApi, updateComment as updateCommentApi, deleteComment as deleteCommentApi } from "./api";

const CommentSection = () => {
  const petList = pets;
  const { petId } = useParams();
  const { name } = petList.find((pet) => pet.id === Number(petId));

  const [backendComments, setBackendComments] = useState(()=>[]);
  const [activeComment, setActiveComment] = useState(()=>null);
  const addComment = async (text, parentId) => {
    console.log('add comments', text, parentId);
    const newComment = await createCommentApi(text, parentId)
    setBackendComments([newComment, ...backendComments]);
    setActiveComment(null)
  }

  const updateComment = async (text, commentId) => {
    await updateCommentApi(text, commentId)
    const updatedComments = backendComments.map(backendComment => backendComment.id === commentId? {...backendComment, body:text}:backendComment)
    setBackendComments(updatedComments)
    setActiveComment(null)
  }

  const deleteComment = async (commentId) => {
    await deleteCommentApi(commentId)
    const updatedBackendComments = backendComments.filter(backendComment => backendComment.id !== commentId)
    setBackendComments(updatedBackendComments)
  }
  return (
    <section className="w-ful p-6 rounded-lg shadow-xl bg-[#F2EED9] border-2 border-[#8C7A3F] flex flex-col">
      <div className="flex justify-center items-center">
        <h2 className="text-3xl font-semibold">
          Discussions On {" "}
          <span className="gloria-hallelujah-regular">{name}</span>
        </h2>
      </div>
      <Separator className={"bg-[#8C7A3F] my-4"} />
      <CommentForm submitLabel={'Post'} handleSubmit={addComment} />
      <CommentList backendComments={backendComments} setBackendComments={setBackendComments} addComment={addComment} activeComment={activeComment} setActiveComment={setActiveComment} updateComment={updateComment} deleteComment={deleteComment}/>
    </section>
  );
};

export default CommentSection;
