import styles from '../styles/HomePage.module.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
    
    function Navigator(){
        useEffect(() => {
        AOS.init();
      }, [])
        return(
        <nav>
        <div class={styles.logoCase}>
            <img src="/images/clubLOGO.jpeg" alt="Logo" class={styles.logo}/>  
            <h5>ECLIPSE ASTRONOMY</h5>
        </div>
        <ul class={styles.navList}>
            <li> <a href="#home">Home</a></li>
            <li> <a href="#club">Club</a></li>
            <li> <a href="#science">Science</a></li>
            <li> <a href="#contact">Contact US</a></li>
        </ul>
    </nav>
        );
    }

    export default Navigator