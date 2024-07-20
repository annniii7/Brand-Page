import React from 'react'

const Container = () => {
  return (
    <div className='container max-w-screen-xl mt-20 flex mx-auto items-center justify-between'>
      <div className="text w-[593px] h-[613px]">
        <h1 className='font-extrabold text-[100px] leading-[102px]'>YOUR FEET DESERVE THE BEST</h1>
        <p className='font-semibold mt-8'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div className="btns flex gap-5">
        <button className="shop red px-2 py-1 text-white">Shop Now</button>
        <button className="category bg-slate-400 px-2 py-1">Category</button>
      </div>
      <div className="shopping">
        <p>Also available on</p>
        <div className="img flex gap-3">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
        </div>
      </div>
     </div>
      <div className="logoomg">
      <img src="/images/shoe_image.png" alt="" />
      </div>

    </div>
  )
}

export default Container
