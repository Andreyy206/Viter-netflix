import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import Navigation from '@/components/partials/Navigation';
import MoviesTable from './MoviesTable';

const Movies = () => {
  console.log('asd')
  return (
    <div>
      <section className='flex min-h-screen bg-secondary'>
        <aside className='bg-primary text-dark basis-[200px]'>
         <Navigation menu="movies"/>
        </aside>
        <main className='basis-[calc(100%-200px)] min-h-[100dvh] grid grid-rows-[auto,_1fr,_auto]'  >
            <Header title="Movies" subtitle= "List of Movies"/>
           <MoviesTable/>
            <Footer/>

        </main>
      </section>
   
      
    </div>
  );
}

export default Movies
