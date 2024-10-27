import "./Banner.css"
export default function Banner() {
  return (
    <div className='w-11/12 h-96 mx-auto my-6 flex justify-center items-center border-2 banner rounded-xl'>
      <div className='w-9/12 mx-auto'>
        <h1 className='text-2xl md:text-4xl lg:text-7xl text-center font-bold text-white'>Discover an exceptional cooking class tailored for you!</h1>
        <p className="text-center text-zinc-300 text-lg lg:text-xl mt-3">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
        <div className="mt-7 text-center">
            <button className="btn mr-4 bg-[#0BE58A] text-black text-lg font-bold rounded-full">Explore Now</button>
            <button className="btn bg-[#ffffff09] text-white text-lg font-bold rounded-full">Our Feedback</button>
        </div>
      </div>
    </div>
  )
}
