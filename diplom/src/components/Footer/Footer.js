import Container from "react-bootstrap/esm/Container";
import styles from './Footer.module.css'
export function Footer() {
    return (
        <div className={styles.footer}>
        <Container>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <p>© Clinic Scanfert, 2017-2021. All rights reserved</p>
                    <p>191186, г. Cанкт-Петербург, проспект Невский, дом 22-24, литер А, помещение 50Н (п. 45)</p>
                    <p><a href='tel:+79218491015'>+7 (921) 849-10-15</a> </p>
                    <p><a href='mailto:ivmaxsuper2@mail.ru'>ivmaxsuper2@mail.ru</a></p>
                    <p>Все медицинские услуги, рекламируемые на сайте, оказываются строго в соответствии с медицинскими показаниями после консультации врача-специалиста. Обращаем Ваше внимание, что данный сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями ст. 437 Гражданского Кодекса Российской Федерации</p>
                     </div>
                     <div className={styles.right}>
                    <div className={styles.getServiceBtn}><a className={styles.btn}>Оставить отзыв</a></div>
                    <div className={styles.getServiceBtn}><a className={styles.btn}>Задать вопрос</a></div>
                    </div>
               
            </div>
        </Container>
        </div>
    )

}