import { useState } from "react";
import styles from './styles.module.css';

export default function TimelineComponent({job}) {

    const [showMore, setShowMore] = useState(false);

    return (
        <div className = {`${styles.wholeCont} ${showMore ? styles.wholeContExpand : ''}`}>
            <div className = {`${styles.dateCont} ${showMore ? styles.dateContExpand : ''}`}>
                <p className = {styles.date}>{job.startDate}</p>
                <hr className = {styles.line}/>
                <div className={styles.datePoint}></div>
                <p className = {styles.date}>{job.endDate}</p>
            </div>
            <div className = {`${styles.jobCont} ${showMore ? styles.jobContExpand : ''}`}>
                <h1 className = {styles.role}>{job.role}</h1>
                <h1 className = {styles.company}>{job.company}</h1>
                <p className={styles.desc}>{job.desc}</p>
            </div>
            <p className={`${styles.showMoreButton} ${showMore ? styles.showMoreButtonHide : ''}`}
                onClick = {e => setShowMore(true)}>Show More</p>
        </div>
    )
}