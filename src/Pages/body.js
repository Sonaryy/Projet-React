import styles from '../styles/HomePage.module.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Body(){
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])
    return(        
    <section data-aos="fade-up" id="science" class = {styles.science}>
        <div class={styles.sc}>
            <div class={styles.scTitle}>ASTRONOMY</div>
            <p>
                Astronomy is a natural science that studies astronomical phenomena and celestial bodies such as planets,
                moons, stars, nebulae, galaxies, and comets. Astronomy uses mathematics, physics, and chemistry to
                explain the origin and evolution of these phenomena and objects¹².
            </p>
            <a href="science">View All</a>
        </div>
        <div class={styles.telescop}>
            <img src="/images/telescop.png"/>
        </div>
    </section>
    );
}

export default Body