import styles from '../styles/team.module.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
    { name: "ZINEB ZAMZAMI", title: "Président 1", image: "/images/woman.jpg" },
    { name: "ZAID CHAOUKI", title: "Président 2", image: "/images/man.png" },
    { name: "ABDERRAHMANE BENTOUIS", title: "Vice-président 1", image: "/images/man.png" },
    { name: "ZINEB HAZMOUN", title: "Vice-président 2", image: "/images/woman.jpg" },
    { name: "IKRAM MDIFAA", title: "Chef d'atelier", image: "/images/woman.jpg" },
    { name: "ILYASS CHENTOUFI", title: "Chargé d'activité", image: "/images/man.png" },
    { name: "NOUHAILA MOUTAOUAKIL", title: "Responsable des cellules", image: "/images/woman.jpg" },
    { name: "WIAM ARMOULI", title: "Secrétaire générale", image: "/images/woman.jpg" },
    { name: "WALID BASKALY", title: "Chef d'organisation", image: "/images/man.png" },
    { name: "YOUSSEF AIT AHMAD OUBASSOU", title: "Chef de la photographie et des médias", image: "/images/man.png" },
    { name: "HANAA MAGHANIM", title: "Chef de communication", image: "/images/woman.jpg" },
    { name: "MEHDI ELMALIK", title: "Chef de désign", image: "/images/man.png" }
];

function Team() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <body className={styles.body}>
            <nav>
                <div className={styles.logoCase}>
                    <a href="../">
                        <img className={styles.logo} src="../images/clubLOGO.jpeg" alt="logo" />
                    </a>
                    <a href="../">
                        <h5>ECLIPSE ASTRONOMY</h5>
                    </a>
                </div>
                <ul className={styles.navList}>
                    <li><a href="../">Home</a></li>
                    <li><a href="../#club">Club</a></li>
                    <li><a href="../#science">Science</a></li>
                    <li><a href="../#contact">Contact US</a></li>
                </ul>
            </nav>

            <h1 className={styles.cardstitle}>meet our team</h1>
            <div className={styles.members}>
                {teamMembers.map((member, index) => (
                    <div key={index} data-aos="flip-left" data-aos-delay={index * 100} className={styles.cards}>
                        <div className={styles.img}>
                            <img src={member.image} alt={member.name} />
                        </div>
                        <span>{member.name}</span>
                        <h3 className={styles.info}>{member.title}</h3>
                    </div>
                ))}
            </div>
        </body>
    );
}

export default Team;
