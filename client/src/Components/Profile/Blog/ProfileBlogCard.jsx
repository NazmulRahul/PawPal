import { setBlog } from "@/Store/Blog";
import {
  extractFirstImageUrl,
  extractFirstParagraph,
  extractHeadings,
} from "@/Utils/blog";
import { Trash2 } from "lucide-react";
import React from "react";

const ProfileBlogCard = ({ item, showDelete, dispatch, handleBlogDelete }) => {
  const imageUrl = extractFirstImageUrl(item?.content?.content);
  const headings = extractHeadings(
    item.content?.content?.[0]
      ? { type: "doc", content: item.content.content }
      : { type: "doc", content: [] }
  );
  const content = extractFirstParagraph(item?.content?.content);
  const contentAsHeading =
    content?.length > 34 ? content?.substring(0, 33).concat("..") : content;
  const title = headings[0]?.text || contentAsHeading || "Untitled";
  const featureStatus = item.isFeature;
  const blogType = item.type;
  console.log(title, "blog card");
  return (
    <main
      onClick={() => dispatch(setBlog(item))}
      className="w-full bg-[#F2EED9] hover:shadow-lg border-2 border-[#8C7A3F] shadow-md rounded-md p-4 flex justify-between items-center"
    >
      <section className="flex justify-start items-center gap-3">
        <img
          src={imageUrl}
          alt="blog-image"
          className="w-[120px] h-[120px] object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-2xl font-montserrat font-semibold pb-0 mb-0">
            {title}
          </h3>

          <ul className="flex justify-start gap-10 text-md text-[#565656] mt-1 ml-5 list-disc">
            <li>{blogType.charAt(0).toUpperCase() + blogType.slice(1)}</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-2 mr-6">
        {showDelete ? (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents the parent's onClick from firing
              handleBlogDelete(item._id);
            }}
            className="p-2 rounded-md hover:shadow-md hover:bg-red-200 active:font-bold font-semibold"
          >
            <Trash2 color="red" size={32} />
          </button>
        ) : null}
      </section>
    </main>
  );
};

export default ProfileBlogCard;
