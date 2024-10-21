import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Navigation from '@/components/partials/Navigation'

import React from 'react'

const Dashboard = () => {
  return (

    
      <section className='flex min-h-screen bg-secondary'>
        <aside className='bg-primary text-dark basis-[200px]'>
         <Navigation menu="dashboard"/>
        </aside>
        <main className='basis-[calc(100%-200px)] min-h-[100dvh] grid grid-rows-[auto,_1fr,_auto]'  >
            <Header title="Dashboard" subtitle="Welcome Administrator"/>
            <Footer/>

        </main>
      </section>
    
    

  )
}

export default Dashboard
