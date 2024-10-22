import { devImgPath } from '@/components/helpers/functions-general'
import { Play, Search } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className='bg-primary py-5'>
        <div className='container max-w-[1300px] w-full mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <img
              src={`${devImgPath}/Logo-netflix.png`}
              alt=''
              className='w-[120px] '
            />
            <ul className='flex gap-4 mr-auto ml-10'>
              <li>
                <Link to='/'>TV Shows</Link>
              </li>
              <li>
                <Link to='/'>Movies</Link>
              </li>
              <li>
                <Link to='/'>Recently Added</Link>
              </li>
              <li>
                <Link to='/'>My List</Link>
              </li>
            </ul>
            <button className=''>
              <Search />
            </button>
          </div>
        </div>
      </header>
      <div className='banner h-[calc(100vh-72.5px)] relative'>
        <img
          src={`${devImgPath}/Logo-Lotr.png`}
          alt=''
          className='h-full w-full object-cover'
        />
        <div className=' absolute top-0 w-full h-full bg-gradient-to-r from-black to-transpareng'></div>
        <div className='absolute top-1/2 -translate-y-1/2 left-[calc((100vw-1300px)/2+16px)] max-w-[450px]'>
          <ul className='flex gap-2 text-xs items-center mb-3'>
            <li>2023</li>
            <li>Fictional/Action</li>
            <li>1h 53mins</li>
            <li><span className='px-1 py-0.5 leading-none  text-[8px] -translate-y-0.5 inline-block  border border-line'>HD</span>
            </li>
          </ul>
          <h1 className='text-[clamp(30px,_6vw,_60px)]'>Lord of the Rings</h1>
          <p className='text-base mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt cum hic tenetur repellat maiores! Repellendus earum facere adipisci. Neque repudiandae ipsa maxime aliquid accusantium libero molestiae consectetur earum cupiditate!</p>
          <p className='mb-5 text-base'> Elijah Wood · Frodo ; Ian McKellen · Gandalf ; Orlando Bloom · Legolas ; Sean Bean · Boromir ; Alan Howard</p>
          <div className='flex gap-3'>
            <button className='btn btn-accent min-w-[100px] flex justify-center'><Play fill={"#fff"} size={16}/>Play</button>
            <button className='btn bg-gray-700 text-white min-w-[100px] bg-opacity-20  justify-center'><Play fill={"#fff"} size={16}/>More Info</button>

          </div>


          

        </div>
      </div>
    </>
  );
}

export default Home
