// src/pages/AboutUs.jsx
import React from 'react'

export default function AboutUs() {
  return (
    <main className="bg-[#EBE8DB] min-h-screen flex justify-center items-start py-10 px-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-3 gap-8">

        {/* Left Column */}
        <div className="flex flex-col">
          <div className="flex items-center mb-6">
            <span className="text-sm uppercase tracking-widest text-gray-500">STUDIO SHODWE</span>
            <div className="flex-grow h-px bg-gray-300 ml-4" />
          </div>
          <h1 className="text-7xl md:text-8xl font-extrabold uppercase leading-tight text-black">
            About<br />
            <span className="block text-blue-900">Us</span>
          </h1>
        </div>

        {/* Right Columns (Text + Images) */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="space-y-4 text-justify text-gray-700">
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
            <p>It was popularised in the 1960s with the release of Letraset sheets.</p>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

          <div className="space-y-4 text-justify text-gray-700">
            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>

            {/* Image 1 */}
            <img
              src="https://via.placeholder.com/300x180"
              alt="Team collaboration"
              className="w-full rounded-lg shadow-md"
            />

            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>

            {/* Image 2 */}
            <img
              src="https://via.placeholder.com/300x180"
              alt="Office scene"
              className="w-full rounded-lg shadow-md"
            />

            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>

        </div>

        {/* Footer URL */}
        <div className="md:col-span-3 mt-6 pt-6 border-t border-gray-200 text-center">
          <a href="https://www.reallygreatsite.com" className="text-sm text-gray-500 hover:underline">
            www.reallygreatsite.com
          </a>
        </div>

      </div>
    </main>
  )
}
 