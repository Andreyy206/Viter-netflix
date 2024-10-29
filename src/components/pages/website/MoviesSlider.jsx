import { devImgPath } from '@/components/helpers/functions-general';
import {ChevronLeft, ChevronRight, Dot, Play } from 'lucide-react';
import React from 'react'
import Slider from 'react-slick';

const MoviesSlider = ({title="", isTopTen=true}) => {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <button className='absolute -top-12 right-6' onClick={onClick}>
          <ChevronRight stroke={"#fff"} size={30} />
        </button>
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <button className='absolute -top-12 right-14' onClick={onClick}>
          <ChevronLeft stroke={"#fff"} size={30} />
        </button>
      );
    }
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />,
    };

  return (
    <section className='pt-24 bg-primary text-white'>
      <div className='px-6'>
        <h2 className='mb-5 text-4xl pl-4'>{title}</h2>
        <Slider {...settings}>


          <div className='slider-item relative group overflow-hidden px-5 '>
            <img src={`${devImgPath}/poster.jpg`}alt=''className='w-[331px] h-[441px] object-cover '/>
            <div className='info p-4 absolute text-white top-full transition-all left-5  bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Harry Potter and the Sorcerer's Stone</h2>
              <p className='flex items-center mb-5'>Romance <Dot /> 2022 <Dot /> 1h 43m</p>
              <h4>Summary</h4>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                laudantium iure debitis id mollitia consequuntur nihil ipsum
                asperiores numquam corporis.
              </p>
              <h4>Cast</h4>
              <p>Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert,Matthew Glave, Ellen Albertini Dow, Angela Featherston</p>
              <button className='btn btn-accent self-start mt-5 gap-0'><Play size={20} className='-translate-x-1' />Play</button>
            </div>
            {isTopTen && (
              <p className='absolute -bottom-3   -left-2 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>1</p>
            )}
          </div>

          <div className='slider-item relative group overflow-hidden px-5 '>
            <img src={`${devImgPath}/poster.jpg`}alt=''className='w-[331px] h-[441px] object-cover '/>
            <div className='info p-4 absolute text-white top-full transition-all left-5  bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Harry Potter and the Sorcerer's Stone</h2>
              <p className='flex items-center mb-5'>Romance <Dot /> 2022 <Dot /> 1h 43m</p>
              <h4>Summary</h4>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                laudantium iure debitis id mollitia consequuntur nihil ipsum
                asperiores numquam corporis.
              </p>
              <h4>Cast</h4>
              <p>
                Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert,
                Matthew Glave, Ellen Albertini Dow, Angela Featherston
              </p>
              <button className='btn btn-accent self-start mt-5 gap-0'>
                <Play size={20} className='-translate-x-1' />
                Play
              </button>
            </div>
             {isTopTen && (
            <p className='absolute -bottom-3   -left-2 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>
              2
            </p>
)}
          </div>

          <div className='slider-item relative group overflow-hidden px-5 '>
            <img
              src={`${devImgPath}/poster.jpg`}
              alt=''
              className='w-[331px] h-[441px] object-cover '
            />
            <div className='info p-4 absolute text-white top-full transition-all left-5  bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>
                Harry Potter and the Sorcerer's Stone
              </h2>
              <p className='flex items-center mb-5'>
                Romance <Dot /> 2022 <Dot /> 1h 43m
              </p>

              <h4>Summary</h4>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                laudantium iure debitis id mollitia consequuntur nihil ipsum
                asperiores numquam corporis.
              </p>
              <h4>Cast</h4>
              <p>
                Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert,
                Matthew Glave, Ellen Albertini Dow, Angela Featherston
              </p>
              <button className='btn btn-accent self-start mt-5 gap-0'>
                <Play size={20} className='-translate-x-1' />
                Play
              </button>
            </div>
             {isTopTen && (
            <p className='absolute -bottom-3   -left-2 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>
              3
            </p>
             )}
            
          </div>

          <div className='slider-item relative group overflow-hidden px-5 '>
            <img
              src={`${devImgPath}/poster.jpg`}
              alt=''
              className='w-[331px] h-[441px] object-cover '
            />
            <div className='info p-4 absolute text-white top-full transition-all left-5  bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>
                Harry Potter and the Sorcerer's Stone
              </h2>
              <p className='flex items-center mb-5'>
                Romance <Dot /> 2022 <Dot /> 1h 43m
              </p>

              <h4>Summary</h4>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                laudantium iure debitis id mollitia consequuntur nihil ipsum
                asperiores numquam corporis.
              </p>
              <h4>Cast</h4>
              <p>
                Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert,
                Matthew Glave, Ellen Albertini Dow, Angela Featherston
              </p>
              <button className='btn btn-accent self-start mt-5 gap-0'>
                <Play size={20} className='-translate-x-1' />
                Play
              </button>
            </div>
             {isTopTen && (
            <p className='absolute -bottom-3   -left-2 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>
              4
            </p>
             )}
          </div>

          <div className='slider-item relative group overflow-hidden px-5 '>
            <img
              src={`${devImgPath}/poster.jpg`}
              alt=''
              className='w-[331px] h-[441px] object-cover '
            />
            <div className='info p-4 absolute text-white top-full transition-all left-5  bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>
                Harry Potter and the Sorcerer's Stone
              </h2>
              <p className='flex items-center mb-5'>
                Romance <Dot /> 2022 <Dot /> 1h 43m
              </p>

              <h4>Summary</h4>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                laudantium iure debitis id mollitia consequuntur nihil ipsum
                asperiores numquam corporis.
              </p>
              <h4>Cast</h4>
              <p>
                Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert,
                Matthew Glave, Ellen Albertini Dow, Angela Featherston
              </p>
              <button className='btn btn-accent self-start mt-5 gap-0'>
                <Play size={20} className='-translate-x-1' />
                Play
              </button>
            </div>
             {isTopTen && (
            <p className='absolute -bottom-3   -left-2 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>
              5
            </p>
             )}
          </div>

          <div className='slider-item relative group overflow-hidden px-5 '>
            <img
              src={`${devImgPath}/poster.jpg`}
              alt=''
              className='w-[331px] h-[441px] object-cover '
            />
            <div className='info p-4 absolute text-white top-full transition-all left-5  bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>
                Harry Potter and the Sorcerer's Stone
              </h2>
              <p className='flex items-center mb-5'>
                Romance <Dot /> 2022 <Dot /> 1h 43m
              </p>

              <h4>Summary</h4>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                laudantium iure debitis id mollitia consequuntur nihil ipsum
                asperiores numquam corporis.
              </p>
              <h4>Cast</h4>
              <p>
                Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert,
                Matthew Glave, Ellen Albertini Dow, Angela Featherston
              </p>
              <button className='btn btn-accent self-start mt-5 gap-0'>
                <Play size={20} className='-translate-x-1' />
                Play
              </button>
            </div>
             {isTopTen && (
            <p className='absolute -bottom-3   -left-2 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>
              6
            </p>
             )}
          </div>

          <div className='slider-item relative group overflow-hidden px-5 '>
            <img
              src={`${devImgPath}/poster.jpg`}
              alt=''
              className='w-[331px] h-[441px] object-cover '
            />
            <div className='info p-4 absolute text-white top-full transition-all left-5  bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>
                Harry Potter and the Sorcerer's Stone
              </h2>
              <p className='flex items-center mb-5'>
                Romance <Dot /> 2022 <Dot /> 1h 43m
              </p>

              <h4>Summary</h4>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                laudantium iure debitis id mollitia consequuntur nihil ipsum
                asperiores numquam corporis.
              </p>
              <h4>Cast</h4>
              <p>
                Adam Sandler, Drew Barrymore, Christine Taylor, Allen Covert,
                Matthew Glave, Ellen Albertini Dow, Angela Featherston
              </p>
              <button className='btn btn-accent self-start mt-5 gap-0'>
                <Play size={20} className='-translate-x-1' />
                Play
              </button>
            </div>
             {isTopTen && (
            <p className='absolute -bottom-3   -left-2 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>
              7
            </p>
             )}
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default MoviesSlider
