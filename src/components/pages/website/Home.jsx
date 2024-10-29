import { devImgPath } from '@/components/helpers/functions-general'
import {  ChevronLeft, ChevronRight, Dot, Play, Search } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from './Header';
import Banner from './Banner';
import MoviesSlider from './MoviesSlider';


const Home = () => {
    


  return (
    <>
      <Header/>
      <Banner/>
      <MoviesSlider title='Top in the Philippines'/>
      <MoviesSlider title='Top Movies'/>
      <MoviesSlider title='Top Series'/>
      <MoviesSlider title='Korean Drama' isTopTen={false}/>
      

    </>
  );
}

export default Home
