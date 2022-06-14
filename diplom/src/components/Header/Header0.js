import styles from './Header0.module.css';
import Container from 'react-bootstrap/Container'
import { FaPhoneAlt } from 'react-icons/fa'
export function Header0() {
    return (
        <Container>
            <div className={styles.wrapper}>
                <div className={styles.logo}><img src='./image/Frame_2.png'></img></div>
                <div className={styles.number}><span className={styles.icon}><FaPhoneAlt/></span><a className={styles.phone} href='tel:+79218491015'>+7(921)849-10-15</a></div>
                <div className={styles.getServiceBtn}><a className={styles.btn}>Запись на прием</a></div>
            </div>
        </Container>
    )
}