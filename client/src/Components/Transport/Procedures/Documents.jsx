import React, { useRef , useState} from 'react'

const Documents = ({translate}) => {
    const fileInputRef = useRef(null)
    const [fileName, setFileName] = useState('Upload file');
    const handleClick = ()=>{
        fileInputRef.current?.click();
    }
    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };
  return (
    <section style={{transform:`translateX(${translate}%)`}} className=' transition-transform duration-500 shrink-0 w-full h-full rounded-4xl flex justify-between'>
        <div className="w-[40%] h-full rounded-3xl">
        <img src={'https://i.pinimg.com/736x/a2/35/a5/a235a5496fd915d05e52e8d5f130ba31.jpg'} className='w-full h-full rounded-3xl object-cover' alt="" />
        </div>
        <div className="w-[50%] h-full flex flex-col justify-start items-center pt-[40px] gap-[15px] text-white ">
            <div className="flex items-center border border-neutral-300 rounded-lg w-[80%] h-[40px] pl-4 bg-white text-black">
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <span className="flex-1 text-neutral-500 truncate">{fileName}</span>
                <button
                    type="button"
                    onClick={handleClick}
                    className="flex flex-1 items-center justify-center px-4 h-full bg-blue-500 text-white rounded-r-lg"
                >
                    Vaccination Book (Front)
                </button>
            </div>
            <div className="flex items-center border border-neutral-300 rounded-lg w-[80%] h-[40px] pl-4 bg-white text-black">
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <span className="flex-1 text-neutral-500 truncate">{fileName}</span>
                <button
                    type="button"
                    onClick={handleClick}
                    className="flex flex-1 items-center justify-center px-4 h-full bg-blue-500 text-white rounded-r-lg"
                >
                    Vaccination Book (Back)
                </button>
            </div>
            <div className="flex items-center border border-neutral-300 rounded-lg w-[80%] h-[40px] pl-4 bg-white text-black">
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <span className="flex-1 text-neutral-500 truncate">{fileName}</span>
                <button
                    type="button"
                    onClick={handleClick}
                    className="flex flex-1 items-center justify-center px-4 h-full bg-blue-500 text-white rounded-r-lg"
                >
                    Pet Photo (Standing)
                </button>
            </div>
            <div className="flex items-center border border-neutral-300 rounded-lg w-[80%] h-[40px] pl-4 bg-white text-black">
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <span className="flex-1 text-neutral-500 truncate">{fileName}</span>
                <button
                    type="button"
                    onClick={handleClick}
                    className="flex flex-1 items-center justify-center px-4 h-full bg-blue-500 text-white rounded-r-lg"
                >
                    Pet Photo (Sitting)
                </button>
            </div>
        </div>
    </section>
  )
}

export default Documents
