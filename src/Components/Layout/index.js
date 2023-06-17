import styles from '../../../styles/Home.module.css';

export default function Layout({children}) {

    return (
        <div className={styles.LayoutCont}>
            <div className={styles.Cont}>
                <main>{children}</main>
            </div>
        </div>
    )
}