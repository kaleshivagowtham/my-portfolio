import { useSelector } from 'react-redux';
import Head from 'next/head';
import styles from './styles.module.css';
import Link from 'next/link';

export default function AboutMeComponent({scrollRefABOUTME , currView}) {

    const {darkMode} = useSelector(store => store.darkMode);

    const skills = [[{'name' : "Next.Js",'logo' : '/nextJsLogo.png'},{'name' : "React.Js",'logo' : '/reactJsLogo.png'},{'name' : "NodeJs",'logo' : '/nodeJsLogo.png'}, {'name' : "ExpressJs",'logo' : '/expressJsLogo.png'}, {'name' : "Mongoose",'logo' : '/mongoDbLogo.png'}, {'name' : "Redux",'logo' : '/reduxLogo.png'}],
                    [{'name' : "C++",'logo' : '/cppLogo.png'},{'name' : "Python",'logo' : '/pythonLogo.png'},{'name' : "DSA",'logo' : '/dsaLogo.png'}],
                    [{'name' : "MySql",'logo' : '/mySqlLogo.png'},{'name' : "MongoDb",'logo' : '/mongoDbLogo.png'}]];

    return (
        <div className={`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''}`} 
            ref={scrollRefABOUTME}>
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
            <p className={`${styles.title} ${darkMode ? styles.titleDark : ''}`}>Why Me?</p>
            <div className={`${styles.cont} ${darkMode ? styles.contDark : ''}`}>
                <div className={styles.leftCont}>
                    <h1 className={styles.leftContText1}> Shiva Gowtham Kale</h1>
                    <p className={styles.leftContText2}> I am a Full Stack web developer, and have hands on experience of working in a web based product startup. In there I have had a chance of working with the technologies mentioned here.
                        <br />During my internship as a software developer(in MERN stack)in a product based startup, I have had a chance to explore multiple roles. I have actively worked as a <br /><br />
                        1. Front-end Developer : Developing dynamic, responsive & SEO optimized webpages.<br />
                        2. Back-end Developer : developing scalable backend to support a large client base.<br />
                        3. Client manager : Communicating with the client for project reviews and client updates.<br />
                        4. Tester and Debugger : Testing the website for potential point break test cases. And debugging the code.<br />
                        5. UI/UX developer : Developing a user friendly Ui for a better client experience.<br />
                        6. SEO website optimization : Optimizing the website with Meta-data & Server Side Rendering.<br />
                    </p>
                </div>
                <div className={`${styles.rightCont} ${darkMode ? styles.rightContDark : ''}`}>
                    <h1 className={styles.leftContText1}> My Skills</h1>
                    <div className={styles.rightBottomCont}>
                        <div className={styles.eachSkillSet}>
                        {
                            skills[0].map((skill) => {
                                return (
                                    <div key={skill} className={`${styles.eachSkill} ${darkMode ? styles.eachSkillDark : ''}`}>
                                        <img className={styles.eachSkillImg} src={skill.logo} alt={skills.name}/>
                                        <h1 className={styles.eachSkillName}>{skill.name}</h1>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className={styles.eachSkillSet}>
                        {
                            skills[1].map((skill) => {
                                return (
                                    <div key={skill} className={`${styles.eachSkill} ${darkMode ? styles.eachSkillDark : ''}`}>
                                        <img className={styles.eachSkillImg} src={skill.logo} alt={skills.name}/>
                                        <h1 className={styles.eachSkillName}>{skill.name}</h1>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className={styles.eachSkillSet}>
                        {
                            skills[2].map((skill) => {
                                return (
                                    <div key={skill} className={`${styles.eachSkill} ${darkMode ? styles.eachSkillDark : ''}`}>
                                        <img className={styles.eachSkillImg} src={skill.logo} alt={skills.name}/>
                                        <h1 className={styles.eachSkillName}>{skill.name}</h1>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}