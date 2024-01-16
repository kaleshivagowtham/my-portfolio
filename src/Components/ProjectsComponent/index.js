import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import Head from 'next/head';

export default function ProjectsComponent({scrollRefPROJECTS}) {

    const {darkMode} = useSelector(store => store.darkMode);
    const projects =[{'title' : 'My Portfolio','link' : 'https://shivakale.netlify.app/','img':'MyPortfolio.png', 'desc' : 'This is all of the professional experience I have as a web developer.'},
                    {'title' : 'Divine Classical Homeopathy','link' : 'https://divineclassicalhomoeopathy.com/','img':'divineClassicalHomeopathy.png', 'desc' : 'It is a website I have built as a freelance web developer, for a homeopathy clinic.'},
                    {'title' : 'Storry Teller','link' : 'https://storryteller.netlify.app/','img':'StorryTellerImg.png', 'desc' : "It's an open-source version of writing, where you can contribute and accept contributions."}];

    return (
        <div className={styles.wholeCont} ref={scrollRefPROJECTS}>
            <Head>
                <title>Shiva Gowtham Kale</title>
                <link rel="profile image" href="/MyPortfolio.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Web developer portfolio website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, Next.js, Reactjs, profile, shiva, gowtham, kale, web developer, recruitment
                    jobs, job, portfolio, MERN stack, NodeJs, ExpressJs, c++, mysql, cpp, MongoDb, projects, web projects, experience
                    developer"/>
                <meta name="author" content="Shiva Gowtham Kale"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <h1 className={`${styles.title} ${darkMode ? styles.titleDark : ''}`}>My Projects</h1>
            <div className={styles.cont}>
            {
                projects.map((project) => {
                    return (
                        <a key={project} href={project.link} target='_blank'
                            className={styles.eachProjectCont} style={{backgroundImage:`url(${project.img})`}}>
                            <div className={`${styles.descriptionCont} ${darkMode ? styles.descriptionContDark : ''}`}>
                                <h1 className={`${styles.eachProjectTitle} ${darkMode ? styles.eachProjectTitleDark : ''}`}>{project.title}</h1>
                                <p className={`${styles.eachProjectDesc} ${darkMode ? styles.eachProjectDescDark : ''}`}>{project.desc}</p>
                            </div>
                        </a>
                    )
                })
            }
            </div>
        </div>
    )
}