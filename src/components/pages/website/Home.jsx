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
import useQueryData from '@/components/custom-hook/useQueryData';
import SpinnerTable from '@/components/partials/spinners/SpinnerTable';
import MoviesSliderTopTen from './MoviesSliderTopTen';


const Home = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/movies`, // endpoint
    "get", // method
    "movies"
  );



  const {
    isLoading:topMoviesisLoading,
    isFetching:topMoviesisFetching,
    error :topMoviesError,
    data: topmovies,
  } = useQueryData(
    `/v1/top-movies`, // endpoint
    "get", // method
    "top-movies"
  );

  const {
    isLoading:topSeriesisLoading,
    isFetching:topSeriesisFetching,
    error :topSeriesError,
    data: topseries,
  } = useQueryData(
    `/v1/top-series`, // endpoint
    "get", // method
    "top-series"
  );


  // console.log(topmovies);



  const getAllKdrama = !isLoading && result?.data.filter((movie) => movie.movies_category === 'kdrama' )
  const getAllPinoy = !isLoading && result?.data.filter((movie) => movie.movies_category === 'Pinoy Original' )
  const getAllInternational = !isLoading && result?.data.filter((movie) => movie.movies_category === 'international' )

  return (
    <>  
      <Header />
      <Banner />
      

      {topMoviesisLoading ? <SpinnerTable /> : <MoviesSliderTopTen
          title='Top Movies'
          isTopTen={true}
          category={topmovies}
        />
      }
      {isLoading ? (
        <SpinnerTable />
      ) : (
        <MoviesSlider
          title='Korean Drama'
          isTopTen={false}
          category={getAllKdrama}
        />
      )}

      {isLoading ? (
        <SpinnerTable />
      ) : (
        <MoviesSlider
          title='Pinoy Drama'
          isTopTen={false}
          category={getAllPinoy}
        />
      )}

      {isLoading ? (
        <SpinnerTable />
      ) : (
        <MoviesSlider
          title='International Drama'
          isTopTen={false}
          category={getAllInternational}
        />
      )}


    </>
  );
}


export default Home
