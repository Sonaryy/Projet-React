import styles from '../styles/HomePage.module.css';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header(){
    useEffect(() => {
        AOS.init({duration: 2000});
      }, [])
    return(
        <header id="#home">
        <div data-aos="fade-left" class={styles.moonCase}>
            <img class={styles.moon} src="/images/moon.png" alt=""/>
        </div>
        <div data-aos="fade-right" class={styles.intro}>
            <div>
                <h2 style={{color: "black", backgroundColor: "White",padding: "5px 8px", borderRadius: 10 }}>OUR</h2>
                <h2 style={{position: "relative", top: "5px"}}>CLUB</h2>

            </div>

            <p>
                The club arose because of a very interested person who teaches astronomy and has the means to learn it.
                He
                and some friends attended an astronomy conference , so the group became interested in this field, so
                they
                suggested opening a club for this science to benefit from more information and for other people as well,
                since it is a science that exists in the entire world and not Confined to one area.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScSVBEJVXjHeq2VA_Jx4XB2SrUt0CucaOa7yUuwF9MoWXNqig/viewform"
                class={styles.btn}>Join us</a>
        </div>
    </header>
    );
}

export default Header