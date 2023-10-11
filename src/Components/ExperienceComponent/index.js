import styles from './styles.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TimelineComponent from '../TimelineComponent';

export default function ExperienceComponent ({scrollRefEXPERIENCE}) {

    const {darkMode} = useSelector(store => store.darkMode);

    const [timeline, setTimeline] = useState([{'startDate' : 'Aug 1st 2022','endDate' : 'Jan 31st 2023', 'role' : 'Full Stack Developer Intern', 'company' : 'Bizmorphic Research pvt. ltd.', 'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'link' : ''},
                                                {'startDate' : 'Feb 1st 2023','endDate' : 'Mar 31st 2023', 'role' : 'Web developer Freelancer', 'company' : 'Freelance', 'desc' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'link' : ''}
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
            <p className={`${styles.title} ${darkMode ? styles.titleDark : ''}`}>Professional Experience</p>
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