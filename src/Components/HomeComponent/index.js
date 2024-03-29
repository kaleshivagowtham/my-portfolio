import styles from './styles.module.css';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export default function HomeComponent({scrollRefME, scrollUp, mousePos, viewHeight, viewWidth}) {

    const {darkMode} = useSelector(store => store.darkMode);

    const [name, setName] = useState('');
    const [i, setI] = useState(-1);
    const nm = 'Shiva Gowtham \nKale';

    useEffect(() => {
        setI(0);
    },[])

    const nameAdder = useMemo (() => {
        if(i < 19){
            setTimeout(() => {
                setName(name + nm[i]);
                    setI(i+1);
            },150)
        }
        else {
            setTimeout(() => {
                setName('');
                setI(0);
            },5000)
        }
    },[i]);

    useEffect(() => {
        const offsetX = ((mousePos.x - viewWidth/2) / 100) * 5;
        const offsetY = ((mousePos.y - viewHeight/2) / 100) * 5;

        backgroundCircle.style.setProperty("--rotateX", -1*offsetY + "deg");
        backgroundCircle.style.setProperty("--rotateY", offsetX + "deg");

    },[mousePos.x, mousePos.y])

    return (
        <div className={styles.wholeCont} ref={scrollRefME}>
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
                <div className={`${styles.topContBackgroundCircle} ${darkMode ? styles.topContBackgroundCircleDark : ''}`}
                    id='backgroundCircle'
                />
                <div className={`${styles.topLeftCont} ${scrollUp/ viewHeight < 0.5 ? styles.topLeftContTransition : ''}`}>
                    <p className={`${styles.topText1} ${darkMode ? styles.topText1Dark : ''}`}>{"I'm"}</p>
                    <h1 className={`${styles.topName} ${darkMode ? styles.topNameDark : ''}`}>{name}</h1>
                    <p className={`${styles.topText2} ${darkMode ? styles.topText2Dark : ''}`}>I am a BE student passion out in 2024. I have actively participated and organized multiple events under the clubs like Rotaract club and Coders Club in our college. </p>
                </div>
                <div className={`${styles.topRightCont} ${scrollUp/ viewHeight < 0.5 ? styles.topRightContTransition : ''}`}>
                    <p className={`${styles.topText5} ${darkMode ? styles.topText5Dark : ''}`}>services</p>
                    <p className={`${styles.topText3} ${darkMode ? styles.topText3Dark : ''}`}>Lets build quality products in programming and design with my services</p>
                    {/* <p className={styles.topText4}>show more →</p> */}
                    <div className={styles.topRightSocialCont}>
                        <a href='https://www.linkedin.com/in/shivagowthamkale/' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/linkedinLogo.png' className={styles.topRightSocialEachImg} alt='Linkedin logo' />
                        </a>
                        <a href='https://www.instagram.com/shivagowthamkale/' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/instagramLogo.png' className={styles.topRightSocialEachImg} alt='Instagram logo' />
                        </a>
                        <a href='https://twitter.com/GowthamKale' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/twitterLogo.png' className={styles.topRightSocialEachImg} alt='Instagram logo' />
                        </a>
                    </div>
                </div>
                <div className={`${styles.topDownCont} ${darkMode ? styles.topDownContDark : ''} `}>
                    {/* ${scrollUp > 0 ? styles.topDownContOnScroll : ''} */}
                    <a href='https://leetcode.com/shivakale/' style={{cursor:"none"}} target='_blank'>
                        <img src='/leetcodeLogo.png' className={styles.topDownContImg} alt='shivakale leetcode profile' />
                    </a>
                    <a href='https://github.com/kaleshivagowtham/' style={{cursor:"none"}} target='_blank'>
                        <img src='/gitHubLogo.png' className={styles.topDownContImg} alt='shivakale leetcode profile' />
                    </a>
                    <a href='https://www.hackerrank.com/mailongowthu?hr_r=1' style={{cursor:"none"}} target='_blank'>
                        <img src='/hackerRankLogo.png' className={styles.topDownContImg} alt='shivakale leetcode profile' />
                    </a>
                </div>
            </div>
            {/* <AboutMeComponent id='ABOUTME' />
            <ProjectsComponent id='PROJECTS'/> */}
        </div>
    )
}