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
        if(currView === scrollRefABOUTME)
            scrollRefABOUTME.current?.scrollIntoView({behavior : 'smooth'});
        if(currView === scrollRefME)
            scrollRefME.current?.scrollIntoView({behavior : 'smooth'});
        if(currView === scrollRefPROJECTS)
            scrollRefPROJECTS.current?.scrollIntoView({behavior : 'smooth'});
        if( currView === scrollRefEXPERIENCE)
            scrollRefEXPERIENCE.current ?.scrollIntoView({behavior : 'smooth'});
    },[currView]);

    return (
        <div className={`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''} ${scrollUp ? (darkMode ? styles.wholeContDarkOnScroll : '') : ''} `}>
            <Link href='/' className={styles.logoCont}>
                <img className={styles.logoImg} src='/EWHW_final_logo_white.png' alt='logo'/>
                <h1 className={styles.logoText}>S.G.K</h1>
            </Link> 
            <div className={styles.menuImg} onClick={e => setOpenMenu(!openMenu)} style={{alignItems: openMenu ? 'center' : null}}>
                <div className={styles.menuImgEndLine} style={endLineTopStyle}></div>
                <div className={styles.menuImgMidLine} style={{display: openMenu ? 'none' : null}}></div>
                <div className={styles.menuImgEndLine} style={endLineBottomStyle}></div>
            </div>
            {openMenu && <div className={styles.menuCont}>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView(scrollRefME)} style={{borderBottom:currView === scrollRefME.current ? '1px solid #ffffff' : null}}>
                    <h2 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === scrollRefME ? '#ffffff' : null}}>ME</h2>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView(scrollRefABOUTME)} style={{borderBottom:currView === scrollRefABOUTME.current ? '1px solid #ffffff' : null}}>
                    <h2 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === scrollRefABOUTME ? '#ffffff' : null}}>ABOUT ME</h2>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView(scrollRefPROJECTS)} style={{borderBottom:currView === scrollRefPROJECTS.current ? '1px solid #ffffff' : null}}>
                    <h2 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === scrollRefPROJECTS ? '#ffffff' : null}}>PROJECTS</h2>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView(scrollRefEXPERIENCE)} style={{borderBottom:currView === scrollRefEXPERIENCE.current ? '1px solid #ffffff' : null}}>
                    <h2 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === scrollRefEXPERIENCE ? '#ffffff' : null}}>EXPERIENCE</h2>
                </div>
            </div>}
        </div>
    )
}