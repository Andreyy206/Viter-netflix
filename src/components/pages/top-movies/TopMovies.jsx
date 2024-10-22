import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import Navigation from '@/components/partials/Navigation';
import TopMoviesTable from './TopMoviesTable';

const TopMovies = () => {
  return (
    <div>
      <section className='flex min-h-screen bg-secondary'>
        <aside className='bg-primary text-dark basis-[200px]'>
         <Navigation menu="top-movies"/>
        </aside>
        <main className='basis-[calc(100%-200px)] min-h-[100dvh] grid grid-rows-[auto,_1fr,_auto]'  >
            <Header title="TopMovies" subtitle= "List of TopMovies"/>
           <TopMoviesTable/>
            <Footer/>

        </main>
      </section>
      {/* <ModalConfirm/> */}
      {/* <ModalDelete/> */}
      {/* <ModalValidate/> */}
      {/* <ModalError/> */}
      {/* <ToastSuccess/> */}
      {/* <SpinnerWindow/> */}
      
    </div>
  );
}

export default TopMovies
