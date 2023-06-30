import { useState,useMemo,useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import Link from 'next/link';

export default function HomeComponent() {

    const router = useRouter();
    const ref = useRef();
    const [currPage , setCurrPage] = useState();
    const [openMenu , setOpenMenu] = useState(true);

    const endLineTopStyle = {
        // transform: openMenu ? 'rotate(45deg)' : null,
        position: openMenu ? 'absolute' : 'relative',
        animation: openMenu ? 'topRotating 0.5s forwards ease-out' : null,
    }
    const endLineBottomStyle = {
        // transform: openMenu ? 'rotate(-45deg)' : null,
        position: openMenu ? 'absolute' : 'relative',
        animation: openMenu ? 'bottomRotating 0.5s forwards ease-out' : null
    }

    const PageLoad = useMemo(() => {
        setCurrPage(router.pathname)
        console.log(currPage);
    },[router.pathname])

    // const sizeCheck = useMemo(() => {
    //     setDispWidth(window.innerWidth);
    // },[window.innerWidth])

    return (
        <div className={styles.wholeCont}>
            <Link href='/' className={styles.logoCont}>
                <img className={styles.logoImg} src='/EWHW_final_logo_white.png' alt='logo'/>
                <h1 className={styles.logoText}>Shiva Gowtham Kale</h1>
            </Link> 
            <div className={styles.menuImg} onClick={e => setOpenMenu(!openMenu)} style={{alignItems: openMenu ? 'center' : null}}>
                <div className={styles.menuImgEndLine} style={endLineTopStyle}></div>
                <div className={styles.menuImgMidLine} style={{display: openMenu ? 'none' : null}}></div>
                <div className={styles.menuImgEndLine} style={endLineBottomStyle}></div>
            </div>
            {openMenu && <div className={styles.menuCont}>
                <div className={styles.menuOptions}>
                    <h1 className={styles.menuOptionsText}
                        style={{color:currPage === '/' ? '#ffffff' : null}}>ME</h1>
                </div>
                <div className={styles.menuOptions}>
                    <h1 className={styles.menuOptionsText}
                        style={{color:currPage === 'PROJECTS' ? '#ffffff' : null}}>PROJECTS</h1>
                </div>
                <div className={styles.menuOptions}>
                    <h1 className={styles.menuOptionsText}
                        style={{color:currPage === 'EXPERIENCE' ? '#ffffff' : null}}>EXPERIENCE</h1>
                </div>
                <div className={styles.menuOptions}>
                    <h1 className={styles.menuOptionsText}
                        style={{color:currPage === 'ABOUT ME' ? '#ffffff' : null}}>ABOUT ME</h1>
                </div>
            </div>}
        </div>
    )
}