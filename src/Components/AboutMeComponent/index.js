import styles from './styles.module.css';
import Link from 'next/link';

export default function AboutMeComponent() {

    const skills = [[{'name' : "Next.Js",'logo' : '/nextJsLogo.png'},{'name' : "React.Js",'logo' : '/nextJsLogo.png'},{'name' : "NodeJs",'logo' : '/nextJsLogo.png'}, {'name' : "ExpressJs",'logo' : '/nextJsLogo.png'}, {'name' : "Mongoose",'logo' : '/nextJsLogo.png'}, {'name' : "Redux",'logo' : '/nextJsLogo.png'}],
                    [{'name' : "C++",'logo' : '/nextJsLogo.png'},{'name' : "Python",'logo' : '/nextJsLogo.png'},{'name' : "DSA",'logo' : '/nextJsLogo.png'}],
                    [{'name' : "MySql",'logo' : '/nextJsLogo.png'},{'name' : "MongoDb",'logo' : '/nextJsLogo.png'}]];

    return (
        <div className={styles.wholeCont}>
            <p className={styles.title}>Why Me?</p>
            <div className={styles.cont}>
                <div className={styles.leftCont}>
                    <h1 className={styles.leftContText1}> Shiva Gowtham Kale</h1>
                    <p className={styles.leftContText2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a gall</p>
                </div>
                <div className={styles.rightCont}>
                    <h1 className={styles.leftContText1}> My Skills</h1>
                    <div className={styles.rightBottomCont}>
                        <div className={styles.eachSkillSet}>
                        {
                            skills[0].map((skill) => {
                                return (
                                    <div key={skill} className={styles.eachSkill}>
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
                                    <div key={skill} className={styles.eachSkill}>
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
                                    <div key={skill} className={styles.eachSkill}>
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