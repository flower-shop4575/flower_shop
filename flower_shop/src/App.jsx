import React from 'react';
import './styles/global.css';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import ProductSection from './components/ProductSection/ProductSection.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import FeedBackSection1 from './components/FeedBackSection1/FeedBackSection1.jsx';

function App() {
  

  return (
    <>
      <Header></Header>
      <Main></Main>
      <ProductSection></ProductSection>
      <AboutUs></AboutUs>
      <FeedBackSection1></FeedBackSection1>
    </>
  )
}

export default App
