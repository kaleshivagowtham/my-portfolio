import styles from './styles.module.css';
import Link from 'next/link';

export default function HomeComponent() {


    // let topLeftCont = document.getElementsByClassName('topLeftCont');
    // window.addeventListener('scroll',() => {
    //     let value = window.scrollY;
    //     topLeftCont.style.marginTop = value * -5 + 'vh';
    // })

    return (
        <div className={styles.wholeCont}>
            <div className={styles.topCont}>
                <div className={styles.topContBackgroundCircle}></div>
                <div className={styles.topLeftCont}>
                    <p className={styles.topText1}>I'm</p>
                    <h1 className={styles.topName}>Shiva Gowtham </h1>
                    <h1 className={styles.topName} style={{borderBottom:'2px solid #fcba0a'}}>Kale</h1>
                    <p className={styles.topText2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall</p>
                </div>
                <div className={styles.topRightCont}>
                    <p className={styles.topText2}>services</p>
                    <p className={styles.topText3}>Lets build quality products in programming and design with my services</p>
                    <p className={styles.topText4}>show more →</p>
                    <div className={styles.topRightSocialCont}>
                        <a href='https://shivakale.netlify.app/' className={styles.topRightSocialEachCont} target='_blank'>
                            <img src='/facebookLogo.png' className={styles.topRightSocialEachImg} alt='Facebook logo' />
                        </a>
                        <a href='https://shivakale.netlify.app/' className={styles.topRightSocialEachCont} target='_blank'>
                            <img src='/linkedinLogo.png' className={styles.topRightSocialEachImg} alt='Facebook logo' />
                        </a>
                        <a href='https://shivakale.netlify.app/' className={styles.topRightSocialEachCont} target='_blank'>
                            <img src='/twitterLogo.png' className={styles.topRightSocialEachImg} alt='Facebook logo' />
                        </a>
                    </div>
                </div>
                <div className={styles.topDownCont}>
                    {/* <div className={styles.topDownCont}></div> */}
                </div>
            </div>
            
        </div>
    )
}