import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import Link from 'next/link';

export default function AboutMeComponent({scrollRefABOUTME , currView}) {

    const {darkMode} = useSelector(store => store.darkMode);

    const skills = [[{'name' : "Next.Js",'logo' : '/nextJsLogo.png'},{'name' : "React.Js",'logo' : '/nextJsLogo.png'},{'name' : "NodeJs",'logo' : '/nextJsLogo.png'}, {'name' : "ExpressJs",'logo' : '/nextJsLogo.png'}, {'name' : "Mongoose",'logo' : '/nextJsLogo.png'}, {'name' : "Redux",'logo' : '/nextJsLogo.png'}],
                    [{'name' : "C++",'logo' : '/nextJsLogo.png'},{'name' : "Python",'logo' : '/nextJsLogo.png'},{'name' : "DSA",'logo' : '/nextJsLogo.png'}],
                    [{'name' : "MySql",'logo' : '/nextJsLogo.png'},{'name' : "MongoDb",'logo' : '/nextJsLogo.png'}]];

    return (
        <div className={`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''}`} 
            ref={scrollRefABOUTME}>
            <p className={`${styles.title} ${darkMode ? styles.titleDark : ''}`}>Why Me?</p>
            <div className={`${styles.cont} ${darkMode ? styles.contDark : ''}`}>
                <div className={styles.leftCont}>
                    <h1 className={styles.leftContText1}> Shiva Gowtham Kale</h1>
                    <p className={styles.leftContText2}> I am a Full Stack web developer, and have hands on experience of working in a web based product startup. In there I have had a chance of working with the technologies mentioned here.
                        <br />During my internship as a software developer(in MERN stack)in a product based startup, I have had a chance to explore multiple roles. I have actively worked as a <br />
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