
import Head from 'next/head'
import React from 'react'
import Welcome from '../components/Welcome'

const Home = () => {
  
  return (
    <div className="">
      <Head>
        <title>WIT investor</title>
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,900;1,100;1,400;1,700;1,900&display=swap" rel="stylesheet"></link> */}
      </Head>
<main>
  <Welcome />
</main>
      

     
    </div>
  )
}

export default Home
