import { useState,useMemo,useRef, useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar({currView , setCurrView , scrollRefME , scrollRefABOUTME , scrollRefPROJECTS }) {

    const dispatch = useDispatch();
    const {darkMode} = useSelector(store => store.darkMode);


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

    const scroller = useMemo(() => {
        if(currView === 'ABOUT ME')
            scrollRefABOUTME.current?.scrollIntoView({behaviour : 'smooth'});
        if(currView === 'ME')
            scrollRefME.current?.scrollIntoView({behaviour : 'smooth'});
        if(currView === 'PROJECTS')
            scrollRefPROJECTS.current?.scrollIntoView({behaviour : 'smooth'});
    },[currView]);

    // const scroller2 = useMemo(() => {
    //     if(scrollRef && scrollRef.current)
    //         scrollRef.current.scrollIntoView({behaviour: 'smooth'});
    //     console.log(scrollRef.current);
    // },[scrollRef.current])

    return (
        <div className={`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''}`}>
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
                    <h1 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === 'ME' ? '#ffffff' : null}}>ME</h1>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView('PROJECTS')} style={{borderBottom:currView === 'PROJECTS' ? '1px solid #ffffff' : null}}>
                    <h1 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === 'PROJECTS' ? '#ffffff' : null}}>PROJECTS</h1>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView('EXPERIENCE')} style={{borderBottom:currView === 'EXPERIENCE' ? '1px solid #ffffff' : null}}>
                    <h1 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === 'EXPERIENCE' ? '#ffffff' : null}}>EXPERIENCE</h1>
                </div>
                <div className={`${styles.menuOptions} ${darkMode ? styles.menuOptionsDark : ''}`}
                    onClick={e => setCurrView('ABOUT ME')} style={{borderBottom:currView === 'ABOUT ME' ? '1px solid #ffffff' : null}}>
                    <h1 className={`${styles.menuOptionsText} ${darkMode ? styles.menuOptionsTextDark : ''}`}
                        style={{color:currView === 'ABOUT ME' ? '#ffffff' : null}}>ABOUT ME</h1>
                </div>
            </div>}
        </div>
    )
}