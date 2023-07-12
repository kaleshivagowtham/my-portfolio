import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { useState, useMemo } from 'react';

export default function ContactMe({setContactMe , contactMe}) {

    const {darkMode} = useSelector(store => store.darkMode);

    const [selRef, setSelRef] = useState();
    const [msgContents, setMsgContents] = useState({'mail' : '','msg' : ''});
    const [sendVisible , setSendVisible] = useState(false);

    const changeHandler = (e) => {
        const tempMsgContents = msgContents;
        tempMsgContents[e.target.name] = e.target.value;
        console.log(tempMsgContents);
        setMsgContents(tempMsgContents);
        console.log(msgContents);
    }

    const change = useMemo(() => {
        contactMe ? setTimeout(() => {setSendVisible(true);},1500) : setSendVisible(false);
    },[contactMe]);
    
    return (
        <div className = {`${styles.wholeCont} ${darkMode ? styles.wholeContDark : ''} ${!contactMe ? styles.wholeContClose : ''}`}
            onClick={e => {e.stopPropagation();setSelRef(null)}}>
            {contactMe && <p className = {styles.x} onClick = {e => setContactMe(false)}>X</p>}
            <div className = {styles.titleCont} onClick={e => {e.stopPropagation();setContactMe(!contactMe)}}>
                {contactMe
                  ?
                    <h1 className = {`${styles.chatBoxTitle} ${!contactMe ? styles.chatBoxTitleClose : ''}`}>Shiva Gowtham Kale</h1>
                  :
                    <h1 className = {styles.chatBoxTitle}>Contact Me</h1>
                }
            </div>
            <div className = {`${styles.chatCont} ${darkMode ? styles.wholeContDark : ''} ${!contactMe ? styles.chatContClose : ''}`}>
                <label className = {styles.mailInputCont} onClick={e => {e.stopPropagation(),setSelRef('mailInput')}}>
                    <h1 name='mailInput' 
                        className={`${styles.mailInputTitle} ${selRef === 'mailInput' || msgContents.mail !== '' ? `${darkMode ? styles.mailInputTitleDarkOnClick : styles.mailInputTitleOnClick}` : '' } 
                            ${darkMode ? styles.mailInputTitleDark : ''}`}>
                        Your Gmail
                    </h1>
                    <input className={`${styles.mailInput} ${selRef === 'mailInput' ? `${darkMode ? styles.mailInputDarkOnCLick : styles.mailInputOnClick}` : '' }` }
                        name='mail' onChange={e => changeHandler(e)}
                    />
                </label>
                <label className = {styles.mailInputCont} onClick={e => {e.stopPropagation(),setSelRef('messageInput')}}>
                    <h1 name='messageInput' 
                        className={`${styles.mailInputTitle} ${selRef === 'messageInput' || msgContents.msg !== '' ? `${darkMode ? styles.mailInputTitleDarkOnClick : styles.mailInputTitleOnClick}` : '' } 
                            ${darkMode ? styles.mailInputTitleDark : ''}`}>
                        Message
                    </h1>
                    <textarea name='msg' className={`${styles.mailInput} ${selRef === 'messageInput' ? `${darkMode ? styles.mailInputDarkOnCLick : styles.mailInputOnClick}`:''}`}
                        style={{height:'25vh',maxHeight:'25vh' , maxWidth:'95%',fontSize:'1rem',padding:'1vh'}}
                        onChange={e => changeHandler(e)}
                    />
                </label>
            </div>
            {sendVisible && <button className={styles.sendButton}>Send</button>}
        </div>
    )
}