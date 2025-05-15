import styles from '../styles/HomePage.module.css'
import Navigator from './navigator.js';
import Card from './card.js';
import Body from './body.js';
import Header from './header.js';
import Footer from './footer.js';

function Home() {
    return (
      <>
      <Navigator/>
      <Header/>
      <Card/>
      <Body/>
      <Footer/>
      </>
    );
  }
  
  export default Home;