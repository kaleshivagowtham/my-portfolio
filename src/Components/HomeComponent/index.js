import styles from './styles.module.css';
import { useSelector } from 'react-redux';

export default function HomeComponent({scrollRefME}) {

    const {darkMode} = useSelector(store => store.darkMode);

    return (
        <div className={styles.wholeCont} ref={scrollRefME}>
            <div className={styles.topCont}>
                <div className={`${styles.topContBackgroundCircle} ${darkMode ? styles.topContBackgroundCircleDark : ''}`}></div>
                <div className={styles.topLeftCont}>
                    <p className={`${styles.topText1} ${darkMode ? styles.topText1Dark : ''}`}>{"I'm"}</p>
                    <h1 className={`${styles.topName} ${darkMode ? styles.topNameDark : ''}`}>Shiva Gowtham </h1>
                    <h1 className={`${styles.topName} ${darkMode ? styles.topNameDark : ''}`} style={{borderBottom:'2px solid #fcba0a'}}>Kale</h1>
                    <p className={`${styles.topText2} ${darkMode ? styles.topText2Dark : ''}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a gall</p>
                </div>
                <div className={styles.topRightCont}>
                    <p className={`${styles.topText2} ${darkMode ? styles.topText2Dark : ''}`}>services</p>
                    <p className={`${styles.topText3} ${darkMode ? styles.topText3Dark : ''}`}>Lets build quality products in programming and design with my services</p>
                    <p className={styles.topText4}>show more →</p>
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
                <div className={`${styles.topDownCont} ${darkMode ? styles.topDownContDark : ''}`}>
                    <a href='https://leetcode.com/shivakale/' target='_blank'>
                        <img src='/leetcodeLogo.png' className={styles.topDownContImg} alt='shivakale leetcode profile' />
                    </a>
                    <a href='https://github.com/kaleshivagowtham/' target='_blank'>
                        <img src='/gitHubLogo.png' className={styles.topDownContImg} alt='shivakale leetcode profile' />
                    </a>
                    <a href='https://www.hackerrank.com/mailongowthu?hr_r=1' target='_blank'>
                        <img src='/hackerRankLogo.png' className={styles.topDownContImg} alt='shivakale leetcode profile' />
                    </a>
                </div>
            </div>
            {/* <AboutMeComponent id='ABOUTME' />
            <ProjectsComponent id='PROJECTS'/> */}
        </div>
    )
}