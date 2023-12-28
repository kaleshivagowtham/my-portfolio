import styles from './styles.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TimelineComponent from '../TimelineComponent';

export default function ExperienceComponent ({scrollRefEXPERIENCE}) {

    const {darkMode} = useSelector(store => store.darkMode);

    const [timeline, setTimeline] = useState([{'startDate' : `Aug 1st 22`,'endDate' : 'Jan 31st 23', 'role' : 'Full Stack Developer Intern', 'company' : 'Bizmorphic Research pvt. ltd.', 'desc' : `During my internship as a software developer(in MERN stack)in a product based startup, I have had a chance to explore multiple roles. I have actively worked as a \n1. Front-end Developer : Developing dynamic, responsive & SEO optimized webpages\n2. Back-end Developer : developing scalable backend to support a large client base\n3. Client manager : Communicating with the client for project reviews and client updates\n4. Tester and Debugger : Testing the website for potential point break test cases. And debugging the code\n5. UI/UX developer : Developing a user friendly Ui for a better client experience\n6. SEO website optimization : Optimizing the website with Meta-data & Server Side Rendering.`, 'link' : ''},
                                                {'startDate' : 'Feb 1st 23','endDate' : 'Mar 31st 23', 'role' : 'Web developer Freelancer', 'company' : 'Freelance', 'desc' : `Worked on NextJs for building a static website for a Homeopathy Clinic in Navi-Mumbai\n1. Responsive website supporting all devices \n2.SEO(Index 1 on google) optamized`, 'link' : ''}
                                            ]);

    return (
        <div className = {`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''}`} ref = {scrollRefEXPERIENCE}>
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
            <p className={`${styles.title} ${darkMode ? styles.titleDark : ''}`}>Experience</p>
            <div className={`${styles.cont} ${darkMode ? styles.contDark : ''}`}>
                <div className={styles.leftCont}>
                    {timeline?.map((item) => {
                        return <TimelineComponent key={item} job={item}/>
                    })}
                </div>
            </div>
        </div>
    )
}