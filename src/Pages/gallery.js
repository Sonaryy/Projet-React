import styles from '../styles/Gallery.module.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gallery(){
    useEffect(() => {
        AOS.init();
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
    <h1>Space Marvels</h1>
    <div class={styles.Gallery}>
        <div data-aos="zoom-out" data-aos-duration="2000" class={styles.Case}>
            <img src="/images/moon.jpg"/>
        </div>
        <div data-aos="zoom-out" data-aos-duration="2000" class={styles.Case}>
            <img src="/images/comet.jpg"/>
        </div>
        <div data-aos="zoom-out" data-aos-duration="2000" class={styles.Case}>
            <img src="/images/moon2.jpg"/>
        </div>
        <div data-aos="zoom-out" data-aos-duration="2000" class={styles.Case}>
            <img src="/images/moon3.jpg"/>
        </div>
        <div data-aos="zoom-out" data-aos-duration="2000" class={styles.Case}>
            <img src="/images/comet1.jpg"/>
        </div>
        <div data-aos="zoom-out" data-aos-duration="2000" class={styles.Case}>
            <img src="/images/comet2.jpg"/>
        </div>
    </div>
    <div class={styles.viewmore}>
        <a href="https://whatsapp.com/channel/0029VakOdLQ0QeasNkpl9o0i" target="_blank">Click to view more!</a>
    </div>
</body>
    );
}

export default Gallery