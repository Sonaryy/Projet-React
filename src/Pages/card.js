import styles from '../styles/HomePage.module.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card(){
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])
    return(
<section data-aos="fade-up" id="club" class={styles.cardContainer}>
        <a href="Gallery" class={styles.card}>
            <div class={styles.icon}><img src="/images/gallery.png"/></div>
            <h2>Gallery</h2>
            <p>Discover stunning photos of space and its wonders</p>
        </a>
        <a href="Team" class={styles.card}>
            <div class={styles.icon}><img src="/images/teamwork.png"/></div>
            <h2>Team</h2>
            <p>Meet the talented individuals behind our work</p>
        </a>
        <a href="Rules" download="pages/rules.html" target="_blank" class={styles.card}>
            <div class={styles.icon}>
                <img src="/images/document.png"/>
            </div>
            <h2>Rules</h2>
            <p>Follow these guidelines to ensure a safe and productive environment</p>
        </a>
    </section>
    );
}

export default Card