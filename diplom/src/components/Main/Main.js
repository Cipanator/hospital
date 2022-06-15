import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'
import styles from './Main.module.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
export function Main() {
    return (
        <div className={styles.containerOuter}>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/216.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/314.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/Banner_04_6_0.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/56.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container>
                <div className={styles.containerInfo}>
                    <h1 className={styles.globalTitle}>Больница высоких медицинских технологий им. М.Е.Иванова</h1>
                    <Container>
                        <Row xl="4" lg='2' sm='2' xs="1">
                            <Col>
                                <div className={styles.cardWrapper}>
                                    <div><img src="./image/3block/1.svg" height='70px' /></div>
                                    <div className={styles.cardText}>
                                        <p className={styles.title}>150 врачей</p>
                                        <p className={styles.description}>Врачи разных специальностей</p>
                                    </div>
                                </div>
                            </Col>
                            <Col> <div className={styles.cardWrapper}>
                                <div><img src="./image/3block/2.svg" height='70px' /></div>
                                <div className={styles.cardText}>
                                    <p className={styles.title}>47 кандидатов</p>
                                    <p className={styles.description}>медицинских наук</p>
                                </div>
                            </div></Col>
                            <Col> <div className={styles.cardWrapper}>
                                <div><img src="./image/3block/3.svg" height='70px' /></div>
                                <div className={styles.cardText}>
                                    <p className={styles.title}>12 докторов</p>
                                    <p className={styles.description}>медицинских наук</p>
                                </div>
                            </div></Col>
                            <Col> <div className={styles.cardWrapper}>
                                <div><img src="./image/3block/4.svg" height='70px' /></div>
                                <div className={styles.cardText}>
                                    <p className={styles.title}>50 000 консультаций</p>
                                    <p className={styles.description}>в 2021 г.</p>
                                </div>
                            </div></Col>
                            <Col> <div className={styles.cardWrapper}>
                                <div><img src="./image/3block/5.svg" height='70px' /></div>
                                <div className={styles.cardText}>
                                    <p className={styles.title}>6 353 операций</p>
                                    <p className={styles.description}>выполнено в 2021 г.</p>
                                </div>
                            </div></Col>
                            <Col> <div className={styles.cardWrapper}>
                                <div><img src="./image/3block/6.svg" height='70px' /></div>
                                <div className={styles.cardText}>
                                    <p className={styles.title}>2 филиала</p>
                                    <p className={styles.description}>Стараемся быть ближе к нашим пациентам</p>
                                </div>
                            </div></Col>
                            <Col> <div className={styles.cardWrapper}>
                                <div><img src="./image/3block/7.svg" height='70px' /></div>
                                <div className={styles.cardText}>
                                    <p className={styles.title}>35 432 исследований</p>
                                    <p className={styles.description}>выполнено диагноистических исследований</p>
                                </div>
                            </div></Col>
                            <Col> <div className={styles.cardWrapper}>
                                <div><img src="./image/3block/8.svg" height='70px' /></div>
                                <div className={styles.cardText}>
                                    <p className={styles.title}>3,5 дня</p>
                                    <p className={styles.description}>средняя длительность лечения</p>
                                </div>
                            </div></Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <Container>
                <div className={styles.bestTeamContainer}>

                    <div className={styles.titleBlock}>
                        <h1 className={styles.title}>Ведущие специалисты</h1>
                        <p className={styles.desc}>Специалисты клиники обладают многолетним опытом работы. Среди них 18 докторов медицинских и биологических наук, 72 кандидата медицинских наук, 6 заслуженных врачей Российской Федерации. Многие из них стажировались в ведущих клиниках Великобритании, США, Германии, Швейцарии.
                        </p>
                    </div>

                    <div className={styles.teamCards}>
                        <div className={styles.teamCard}>
                            <div className={styles.image}></div>
                            <div className={styles.name}>Иванов Максим Евгеньевич</div>
                            <div className={styles.teamDesc}>И.о. директора Клиники, врач - уролог, д.м.н.</div>
                        </div>
                        <div className={styles.teamCard}>
                            <div className={styles.image} style={{ backgroundImage: "url('./image/4block/2.jpg" }}></div>
                            <div className={styles.name}>Дмитриченко Мигель Владимирович</div>
                            <div className={styles.teamDesc}>Заместитель директора по медицинской части (хирургия), главный специалист по хирургии Клиники, врач - хирург высшей категории, к.м.н., Заслуженный врач РФ</div>
                        </div>
                        <div className={styles.teamCard}>
                            <div className={styles.image} style={{ backgroundImage: "url('./image/4block/1.jpg" }}></div>
                            <div className={styles.name}>Жуков Андрей Дмитриевич</div>
                            <div className={styles.teamDesc}>Врач - хирург, эндокринолог, онколог хирургического (эндокринологического) отделения, д.м.н., профессор, Президент ассоциации эндокринных хирургов России (прием не ведет)</div>
                        </div>
                    </div>

                </div>
            </Container >
        </div >

    )
}
