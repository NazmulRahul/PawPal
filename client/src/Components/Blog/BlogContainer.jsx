import React from 'react'
import BlogCard from './BlogCard'
import BlogHero from './BlogHero'
import BlogFeaturedPost from './BlogFeaturedPost'
import BlogTabs from './BlogTabs'
import BlogHeading from './BlogHeading'
import ScrollTriggeredCurve from '../Utils/ScrollAnimatedCurve'
import { useSelector } from 'react-redux'
import { blogTabIndex } from '@/Store/Blog'
import BlogCardContainer from './BlogCardContainer'
import FeaturePostContainer from './FeaturePostContainer'

const BlogContainer = () => {
  const currentBlogTabIndex = useSelector(blogTabIndex)
  return (
    <div className="w-full h-screen overflow-y-scroll bg-[#FFFDF5] pt-[130px]">
        {/* Heading */}
        <BlogHeading/>
        {/* tabs */}
        <BlogTabs/>
        {/* featured blog */}
        {currentBlogTabIndex===6?<BlogFeaturedPost/>:<BlogHero/>}
        <div className="w-full h-[200px] overflow-hidden flex justify-between mt-[70px] px-[2%] min-[1600px]:px-[10%] ">
          <ScrollTriggeredCurve/>
          <ScrollTriggeredCurve/>
        </div>
        {currentBlogTabIndex===6?<FeaturePostContainer/>:<BlogCardContainer/>}
    </div>
  )
}

export default BlogContainer
