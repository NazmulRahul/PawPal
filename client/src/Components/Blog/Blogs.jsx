import React from 'react'
import AnimatedSection from '../Utils/AnimatedSection'
import { useSelector } from 'react-redux'
import { blogs } from '@/Store/Blog'


const extractHeadings=(node) => {
  let results = []
  const visit = n => {
    if (n.type === 'heading') {
      const text = (n.content || [])
        .map(c => c.type === 'text' ? c.text : (c.content||[]).map(g => g.text||'').join(''))
        .join('')
      results.push({ level: n.attrs?.level ?? 1, text })
    }
    ;(n.content || []).forEach(visit)
  }
  visit(node)
  return results
}

const Blogs = () => {
  const currentBlogs = useSelector(blogs)

  return (
    <div className="fixed top-0 left-0 bottom-0 w-[28%] flex flex-col pt-[130px] pb-[30px] items-center gap-[20px] overflow-y-scroll scrollbar-hidden">
      {currentBlogs.map((item, index) => {
        const headings = extractHeadings(item.content?.[0] ? { type: 'doc', content: item.content } : { type: 'doc', content: [] })
        const title = headings[0]?.text || 'Untitled'

        return (
          <div
            key={index}
            className="w-[90%] h-[170px] relative shrink-0 border-4 border-white group hover:border-blue-500 bg-neutral-900 rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full group-hover:scale-125 transition-transform duration-700 object-cover object-top"
              src="https://c4.wallpaperflare.com/wallpaper/530/621/150/slam-dunk-basketball-comic-art-hd-wallpaper-preview.jpg"
              alt=""
            />
            <div className="absolute w-full h-full inset-0">
              <div className="w-full h-full bg-neutral-950/30 group-hover:backdrop-blur-xs flex justify-between p-4">
                <div className="w-[45%] h-full hidden group-hover:flex items-center">
                  <AnimatedSection isRepeated={true}>
                    <p className="text-white font-bold text-lg leading-tight">
                      {title}
                    </p>
                  </AnimatedSection>
                </div>
                <div className="w-[40%] h-full group-hover:hidden"></div>
                <div className="w-[50%] h-full flex flex-col justify-end items-end p-5 gap-2">
                  <button className="group/button border-2 rounded-md text-lg font-bold hover:border-blue-500 px-4 py-1 cursor-pointer border-blue-400">
                    <span className="text-blue-400 group-hover/button:text-white">V</span>
                    <span className="text-white group-hover/button:text-blue-400">ie</span>
                    <span className="text-blue-400 group-hover/button:text-white">w</span>
                  </button>
                  <button className="group/button border-2 rounded-md text-lg font-bold hover:border-red-500 px-4 py-1 cursor-pointer border-red-400">
                    <span className="text-red-400 group-hover/button:text-white">De</span>
                    <span className="text-white group-hover/button:text-red-400">le</span>
                    <span className="text-red-400 group-hover/button:text-white">te</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Blogs
