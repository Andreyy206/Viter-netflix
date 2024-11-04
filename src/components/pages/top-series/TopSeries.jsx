import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';
import Navigation from '@/components/partials/Navigation';
import TopSeriesTable from './TopSeriesTable';

const TopSeries = () => {
  return (
    <div>
      <section className='flex min-h-screen bg-secondary'>
        <aside className='bg-primary text-dark basis-[200px]'>
         <Navigation menu="top-series"/>
        </aside>
        <main className='basis-[calc(100%-200px)] min-h-[100dvh] grid grid-rows-[auto,_1fr,_auto]'  >
            <Header title="TopSeries" subtitle= "List of TopSeries"/>
           <TopSeriesTable/>
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

export default TopSeries
