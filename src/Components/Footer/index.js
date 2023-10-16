import styles from './styles.module.css';
import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';

export default function Footer() {

    const {darkMode} = useSelector(store => store.darkMode);


    return (
        <div className={`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''}`}>
            <Head>
                <title>Shiva Gowtham Kale</title>
                <link rel="profile image" href="/MyPortfolio.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Web developer portfolio website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, Next.js, Reactjs, profile, shiva, gowtham, kale, web developer, recruitment
                    jobs, job, portfolio, MERN stack, NodeJs, ExpressJs, c++, mysql, cpp, MongoDb"/>
                <meta name="author" content="Shiva Gowtham Kale"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className={styles.topCont}>
                <div className={styles.topLeftCont}>
                    <h1 className={styles.topContText1}> Shiva Gowtham Kale</h1>
                    <p className={styles.topContText2}> 
                        I am a BE student passion out in 2024.<br />
                        I am confident with not only my technical but also non-technical skills.<br />
                        I am also a very social person and am good at mixing in with new people.<br />
                    </p>
                </div>
                <div className={styles.topRightCont}>
                    <p className={styles.topContText3}> Social</p>
                    <div className={styles.topRightSocialCont}>
                        <a href='https://www.linkedin.com/in/shivagowthamkale/' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/facebookLogo.png' className={styles.topRightSocialEachImg} alt='Facebook logo' />
                        </a>
                        <a href='https://www.linkedin.com/in/shivagowthamkale/' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/linkedinLogo.png' className={styles.topRightSocialEachImg} alt='Linkedin logo' />
                        </a>
                        <a href='https://www.linkedin.com/in/shivagowthamkale/' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/twitterLogo.png' className={styles.topRightSocialEachImg} alt='Facebook logo' />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.bottomCont}>
                <p className={styles.bottomContText1}> © Copyright 2023, Made by</p>
                <Link className={styles.bottomContText2} href='https://shivakale.netlify.app/'>Shiva Gowtham Kale</Link>
            </div>
        </div>
    )
}