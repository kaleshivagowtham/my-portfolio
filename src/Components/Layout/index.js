import styles from '../../../styles/Home.module.css';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function Layout({children}) {

    return (
        <div className={styles.LayoutCont}>
            <NavBar />
            <div className={styles.Cont}>
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    )
}