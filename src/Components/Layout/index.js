import { useState , useRef } from 'react';
import styles from '../../../styles/Home.module.css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { darkModeOffAction, darkModeOnAction } from '../../features/modal/darkModeSlice';
import { useSelector , useDispatch } from 'react-redux';
import HomeComponent from '../HomeComponent';
import AboutMeComponent from '../AboutMeComponent';
import ProjectsComponent from '../ProjectsComponent';
import Head from 'next/head';
import ContactMe from '../ContactMe';
import ExperienceComponent from '../ExperienceComponent';

export default function Layout({children}) {

    const scrollRefME = useRef(null);
    const scrollRefABOUTME = useRef(null);
    const scrollRefPROJECTS = useRef(null);
    const scrollRefEXPERIENCE = useRef(null);

    const dispatch = useDispatch();
    const {darkMode} = useSelector(store => store.darkMode);

    const darkModeHandler = () => {
        darkMode === true ? dispatch(darkModeOffAction()) : dispatch(darkModeOnAction());
    }

    const [currView , setCurrView] = useState('ME');
    const [contactMe , setContactMe] = useState(false);

    return (
        <div className={`${styles.LayoutCont} ${darkMode ? styles.LayoutContDark : ''}`} onClick={e => setContactMe(false)}>
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
            <NavBar currView={currView} setCurrView={setCurrView} scrollRefME={scrollRefME}
                scrollRefPROJECTS={scrollRefPROJECTS} scrollRefABOUTME={scrollRefABOUTME} scrollRefEXPERIENCE={scrollRefEXPERIENCE}
                />
            <div className={`${styles.darkModeCont} ${darkMode ? styles.darkModeContOn : ''}`} onClick={e => darkModeHandler()}>
                {/* <img src='/moonIcon.png' className={`${styles.darkModeImg} ${styles.darkModeImgOn}`} /> */}
                <div className={`${styles.darkModeSun} ${darkMode ? styles.darkModeMoon : ''}`}>
                </div>
            </div>
            <div className={styles.Cont}>
                {/* <main>{children}</main> */}
                <HomeComponent scrollRefME={scrollRefME} />
                <AboutMeComponent scrollRefABOUTME={scrollRefABOUTME} />
                <ProjectsComponent scrollRefPROJECTS={scrollRefPROJECTS}/>
                <ContactMe contactMe={contactMe} setContactMe={setContactMe}/>
                <ExperienceComponent scrollRefEXPERIENCE={scrollRefEXPERIENCE}/>
                    
            </div>
            <Footer />
        </div>
    )
}