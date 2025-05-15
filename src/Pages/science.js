import styles from '../styles/science.module.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Science(){
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])
    return(
    <body>
        <nav>
            <div class={styles.logoCase}>
                <a href="../">
                    <img class={styles.logo} src="/images/clubLOGO.jpeg" alt="logo"/>
                </a>
                <a href="../">
                    <h5>ECLIPSE ASTRONOMY</h5>
                </a>
            </div>
            <ul class={styles.navList}>
                <li> <a href="../">Home</a></li>
                <li> <a href="../#club">Club</a></li>
                <li> <a href="../#science">Science</a></li>
                <li> <a href="../#contact">Contact US</a></li>
            </ul>
        </nav>
        <div data-aos="fade-down">
        <div class={styles.astro}>
            <img src="/images/astromen.png" alt=""/>
        </div>
        <div class={styles.text}>
            <h1>ASTRONOMY TOOLS</h1>
            <p>
                Astronomy tools have evolved over time, from primitive binoculars to advanced telescopes used in space.
                Tools also include satellites that help study the Earth and other planets.
            </p>

            <h1>ASTRONOMY ACHIEVEMENTS</h1>

            <h2>Astronomy has achieved many important achievements throughout history, the most prominent of which
                are:
            </h2>
            <ul>
                <li><b>Development of telescopes:</b> Telescopes have contributed to
                    the discovery of new planets and precise details about celestial bodies.
                </li>
                <li><b>The Big Bang Theory:</b> The Big Bang Theory provided an
                    explanation for the formation and evolution of the universe.
                </li>
                <li><b>Exploring planets:</b> Many spacecraft have been sent to
                    explore planets, such as the Mars Rover and Voyager.
                </li>
                <li><b>Discovering black holes:</b> The existence of black holes has
                    been confirmed as one of the most prominent phenomena in the universe.
                </li>
                <li><b>Observing gravitational waves:</b> Gravitational waves
                    predicted by the theory of general relativity have been detected, opening new horizons in the study
                    of the universe.
                </li>
                <li><b>Space telescopes:</b> Such as the Hubble Telescope, which has
                    contributed to the discovery of new galaxies and determining the age of the universe.
                </li>
                <li><b>Exploring stars and galaxies:</b> Studying the formation of
                    stars, the evolution of galaxies, and understanding phenomena such as supernovae.
                </li>
            </ul>
        </div>
        </div>
    </body>

    );
}

export default Science