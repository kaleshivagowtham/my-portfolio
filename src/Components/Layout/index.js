import { useEffect, useState, useRef, useMemo } from 'react';
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

    const [currView , setCurrView] = useState(scrollRefME);
    const [contactMe , setContactMe] = useState(false);

    const [mousePos, setMousePos] = useState({x:60, y:60});

    const [totalHeight, setTotalHeight] = useState(0);
    const [scrollUp, setScrollUp] = useState(0);

    const [viewWidth, setViewWidth] = useState();
    const [viewHeight, setViewHeight] = useState();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setCurrView(entry.target);
                // observer.unobserve(currView.current);
            }
        }, options)

        document.addEventListener('scroll' , () => {
            if(scrollRefME.current)
                observer.observe(scrollRefME.current);
            if(scrollRefABOUTME.current)
                observer.observe(scrollRefABOUTME.current);
            if(scrollRefEXPERIENCE.current)
                observer.observe(scrollRefEXPERIENCE.current);
            if(scrollRefPROJECTS.current)
                observer.observe(scrollRefPROJECTS.current);
        })
        
        return (() => {
            document.removeEventListener('scroll', () => {
                if(scrollRefME.current)
                    observer.unobserve(scrollRefME.current);
                if(scrollRefABOUTME.current)
                    observer.unobserve(scrollRefABOUTME.current);
                if(scrollRefEXPERIENCE.scrollRefEXPERIENCE)
                    observer.unobserve(scrollRefME.current);
                if(scrollRefPROJECTS.current)
                    observer.unobserve(scrollRefPROJECTS.current);
            });
        })
    });

    useEffect(() => {
        setTotalHeight(document.getElementById('layoutId').offsetHeight - window.innerHeight )
        setViewWidth(window.innerWidth);
        setViewHeight(window.innerHeight);
        setMousePos({x:document.body.clientX, y: document.body.clientY});
    },[])

    useEffect(() => {
        const scrollListener = (e) => {
            setScrollUp(window.scrollY);
        }

        document.addEventListener("scroll", scrollListener);
        return(() => {
            document.removeEventListener("scroll", scrollListener);
        })
    },[])


    useEffect(() => {
        // Custom cursor operator
        const updateMouseLoc = (e) => {
            setMousePos({ x: e.clientX - 20, y: e.clientY - 20 });
        };

        document.body.addEventListener('mousemove', updateMouseLoc);
        return (() => {
            document.body.removeEventListener('mousemove',updateMouseLoc);
        })
    },[]);

    const updateMouseLocClick = (e) => {
        setMousePos({ x: e.clientX - 25, y: e.clientY - 25 });
    }

    const cursorStyle = {
        left : mousePos.x ,
        top : mousePos.y 
    }

    const cursorDotStyle = {
        left : mousePos.x + 15,
        top : mousePos.y + 15
    }

    const topScrollBarStyle = {
        width : `${(scrollUp * 100)/totalHeight}%`
    }

    return (
        <div className={`${styles.LayoutCont} ${darkMode ? styles.LayoutContDark : ''}`} id='layoutId' onClick={e => setContactMe(false)}>
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
            <div className={`${styles.topScrollBar}`} style={topScrollBarStyle}></div>

            <div className={`${styles.mouseDiv} ${darkMode ? styles.mouseDivDark : ''}`} style={cursorStyle} onClick={updateMouseLocClick}></div>
            <div className={`${styles.mouseDotDiv} ${darkMode ? styles.mouseDotDivDark : ''}`} style={cursorDotStyle} onClick={updateMouseLocClick}></div>

            <NavBar currView={currView} setCurrView={setCurrView} scrollUp={scrollUp}
                scrollRefME={scrollRefME} scrollRefPROJECTS={scrollRefPROJECTS} scrollRefABOUTME={scrollRefABOUTME} scrollRefEXPERIENCE={scrollRefEXPERIENCE}
            />
            <div className={`${styles.darkModeCont} ${darkMode ? styles.darkModeContOn : ''}`} onClick={e => darkModeHandler()}>
                <div className={`${styles.darkModeSun} ${darkMode ? styles.darkModeMoon : ''}`} />
            </div>
            <div className={styles.Cont}>
                {/* <main>{children}</main> */}
                <HomeComponent scrollRefME={scrollRefME} scrollUp={scrollUp} 
                    mousePos={mousePos} viewWidth={viewWidth} viewHeight={viewHeight}
                />
                <AboutMeComponent scrollRefABOUTME={scrollRefABOUTME} />
                <ProjectsComponent scrollRefPROJECTS={scrollRefPROJECTS}/>
                <ContactMe contactMe={contactMe} setContactMe={setContactMe}/>
                <ExperienceComponent scrollRefEXPERIENCE={scrollRefEXPERIENCE}/>
                    
            </div>
            <Footer />
        </div>
    )
}