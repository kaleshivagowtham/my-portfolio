import { useState,useMemo,useRef, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar({scrollUp,currView, setCurrView, scrollRefME, scrollRefABOUTME, scrollRefPROJECTS, scrollRefEXPERIENCE }) {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(store => store.darkMode);


    const [openMenu , setOpenMenu] = useState(true);

    useEffect(() => {
        if(window.innerWidth <= 500)
            setOpenMenu(false);
    },[])

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

    const scroller = useMemo(() => {
        if(currView === 'ABOUT ME')
            scrollRefABOUTME.current?.scrollIntoView({behavior : 'smooth'});
        if(currView === 'ME')
            scrollRefME.current?.scrollIntoView({behavior : 'smooth'});
        if(currView === 'PROJECTS')
            scrollRefPROJECTS.current?.scrollIntoView({behavior : 'smooth'});
        if( currView === 'EXPERIENCE')
            scrollRefEXPERIENCE.current ?.scrollIntoView({behavior : 'smooth'});
    },[currView]);

    return (
        <div className={`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''} ${scrollUp ? (darkMode ? styles.wholeContDarkOnScroll : '') : ''} `}>
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
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView('ME')} style={{borderBottom:currView === 'ME' ? '1px solid #ffffff' : null}}>
                    <h2 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === 'ME' ? '#ffffff' : null}}>ME</h2>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView('ABOUT ME')} style={{borderBottom:currView === 'ABOUT ME' ? '1px solid #ffffff' : null}}>
                    <h2 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === 'ABOUT ME' ? '#ffffff' : null}}>ABOUT ME</h2>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView('PROJECTS')} style={{borderBottom:currView === 'PROJECTS' ? '1px solid #ffffff' : null}}>
                    <h2 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === 'PROJECTS' ? '#ffffff' : null}}>PROJECTS</h2>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView('EXPERIENCE')} style={{borderBottom:currView === 'EXPERIENCE' ? '1px solid #ffffff' : null}}>
                    <h2 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === 'EXPERIENCE' ? '#ffffff' : null}}>EXPERIENCE</h2>
                </div>
            </div>}
        </div>
    )
}