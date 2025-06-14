import { user } from "@/Store/Auth";
import {
  blogs,
  deleteBlogPost,
  getBlogs,
  getSpecificBlogs,
} from "@/Store/Blog";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import ProfileBlogCard from "./ProfileBlogCard";

const ProfileBlogList = () => {
  const dispatch = useDispatch();
  const userData = useSelector(user);
  const allBlogs = useSelector(blogs);
  useEffect(() => {
    const getSpecificBlogs = async () => {
      try {
        const data = await dispatch(
          getBlogs({ userId: userData?.userId })
        );
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    getSpecificBlogs();
  }, [dispatch, userData]);

  const handleBlogDelete = async (postId, id) => {
    try {
      await dispatch(deleteBlogPost({ blogId: postId }));
      toast.success('Post deleted successfully')
      await dispatch(getBlogs({userId: id}))
    } catch (error) {
      toast.error('Something went wrong')
    }
  };

  console.log(allBlogs, "all blogs");
  return (
    <main className="p-10 pt-2 font-inter w-full max-h-[68vh] overflow-y-auto scrollbar-hidden">
      <div className="flex flex-col justify-start gap-6 mt-4">
        <div className="flex w-full justify-start items-center">
          <h6 className="text-[#565656] font-montserrat text-sm">
            {allBlogs?.length} blog written so far...
          </h6>
        </div>
        {allBlogs.length
          ? allBlogs.map((post) => (
              <ProfileBlogCard
                key={post._id}
                {...post}
                showDelete={true}
                item={post}
                dispatch={dispatch}
                handleBlogDelete={handleBlogDelete}
                userData={userData}
              />
            ))
          : null}
      </div>
    </main>
  );
};

export default ProfileBlogList;
