import styles from './styles.module.css';
import Link from 'next/link';
import Headers from 'next/head';
import { useSelector } from 'react-redux';

export default function Footer() {

    const {darkMode} = useSelector(store => store.darkMode);


    return (
        <div className={`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''}`}>
            <Headers>

            </Headers>
            <div className={styles.topCont}>
                <div className={styles.topLeftCont}>
                    <h1 className={styles.topContText1}> Shiva Gowtham Kale</h1>
                    <p className={styles.topContText2}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a gall</p>
                </div>
                <div className={styles.topRightCont}>
                    <p className={styles.topContText3}> Social</p>
                    <div className={styles.topRightSocialCont}>
                        <a href='https://shivakale.netlify.app/' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/facebookLogo.png' className={styles.topRightSocialEachImg} alt='Facebook logo' />
                        </a>
                        <a href='https://shivakale.netlify.app/' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/linkedinLogo.png' className={styles.topRightSocialEachImg} alt='Facebook logo' />
                        </a>
                        <a href='https://shivakale.netlify.app/' className={`${styles.topRightSocialEachCont} ${darkMode ? styles.topRightSocialEachContDark : ''}`} target='_blank'>
                            <img src='/twitterLogo.png' className={styles.topRightSocialEachImg} alt='Facebook logo' />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.bottomCont}>
                <p className={styles.bottomContText1}> © Copyright 2023, Made by</p>
                <Link className={styles.bottomContText2} href='https://shivakale.netlify.app/'>Shiva Gowtham Kale</Link>
            </div>
        </div>
    )
}