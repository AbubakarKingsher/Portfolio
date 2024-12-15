import React from 'react'
import Hero from '../components/Hero'
import Hr from '../components/Hr'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Page4 from '../components/Page4'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Hero />
            <Hr />
            <Page2 />
            <Hr />
            <Page3 />
            <Hr />
            <Page4 />
            <Footer />
        </>
    )
}

export default Home