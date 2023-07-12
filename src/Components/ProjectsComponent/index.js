import { useSelector } from 'react-redux';
import styles from './styles.module.css';

export default function ProjectsComponent({scrollRefPROJECTS}) {

    const {darkMode} = useSelector(store => store.darkMode);
    const projects =[{'title' : 'My Portfolio','link' : 'https://shivakale.netlify.app/','img':'MyPortfolio.png', 'desc' : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'},
                    {'title' : 'Divine Classical Homeopathy','link' : 'https://divineclassicalhomoeopathy.com/','img':'divineClassicalHomeopathy.png', 'desc' : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'},
                    {'title' : 'My Portfolio','link' : 'https://shivakale.netlify.app/','img':'MyPortfolio.png', 'desc' : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'}];

    return (
        <div className={styles.wholeCont} ref={scrollRefPROJECTS}>
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