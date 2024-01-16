import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { useState, useMemo } from 'react';

export default function ContactMe({setContactMe , contactMe}) {

    const {darkMode} = useSelector(store => store.darkMode);

    const [selRef, setSelRef] = useState();
    const [msgContents, setMsgContents] = useState({'mail' : '','msg' : ''});
    const [sendVisible , setSendVisible] = useState(false);
    const [attachedDoc, setAttachedDoc] = useState([]);

    const changeHandler = (e) => {
        const tempMsgContents = msgContents;
        tempMsgContents[e.target.name] = e.target.value;
        setMsgContents(tempMsgContents);
    }

    const change = useMemo(() => {
        contactMe ? setTimeout(() => {setSendVisible(true)},1500) : setSendVisible(false);
    },[contactMe]);

    const uploadFile = (e) => {
        const tempDocs = [...attachedDoc];
        setAttachedDoc([...tempDocs, e.target.files[0]]);
    }


    
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
            <div className = {`${styles.chatCont} ${darkMode ? styles.chatContDark : ''} ${!contactMe ? styles.chatContClose : ''}`}>
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
                        style={{height:'55vh',maxHeight:'35vh' , maxWidth:'95%', minWidth:'95%', minHeight:'35vh',fontSize:'1rem',padding:'1vh'}}
                        onChange={e => changeHandler(e)}
                    />
                </label>
            </div>
            {sendVisible && 
                <label for='upload-doc' className={styles.attachDocCont}>
                    <img className={styles.attachmentIcon} src='/attachmentIcon.png'/>
                    <input className={styles.docInput}
                        type='file' id='upload-doc' 
                        multiple
                        onChange={uploadFile}
                     />
                </label>
            }
            {sendVisible && <button className={styles.sendButton}>Send</button>}
            {contactMe && attachedDoc.length !== 0 && 
                <div className={`${styles.docsUploadedCont} ${darkMode ? styles.docsUploadedContDark : ''}`}>
                    <p className={styles.docContTitle}>All Docs</p>
                    <div className={styles.docsListCont}>
                    {
                        attachedDoc.map((eachFile) => {
                            return (
                                <div key={eachFile} className={`${styles.eachDocCont} ${darkMode ? styles.eachDocContDark : ''}`}>
                                    <p className={`${styles.eachFileName} ${darkMode ? styles.eachFileNameDark : ''}`}>{eachFile.name}</p>
                                    <img src='/tickMark.png' alt='tick mark for file upload' className={styles.tickMark} />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            }
        </div>
    )
}