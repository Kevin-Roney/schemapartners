import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerNav}>
                <div className={styles.footerNavContainer}>
                    <div className={styles.footerNavBlock}>
                        <h3> <Link href='/Services'>SERVICES</Link></h3>
                        <ul>
                            <li>Sequi nesciunt 1</li>
                            <li>Sequi nesciunt 2</li>
                            <li>Sequi nesciunt 3</li>
                            <li>Sequi nesciunt 4</li>
                        </ul>
                    </div>
                    <div className={styles.footerNavBlock}>
                        <h3><Link href='/About'>ABOUT</Link></h3>
                        <ul>
                            <li>Sequi nesciunt 1</li>
                            <li>Sequi nesciunt 2</li>
                            <li>Sequi nesciunt 3</li>
                            <li>Sequi nesciunt 4</li>
                        </ul>
                    </div>
                    <div className={styles.footerContactBlock}>
                        <div>
                            <h3><Link href='/Contact'>CONTACT</Link></h3>
                            <ul>
                                <li><b>Edward Roney</b></li>
                                <li>000.000.0000</li>
                                <li> <a href='mailto: katrina.cloyd@yahoo.com'>Email</a></li>
                                <li><a href='https://www.linkedin.com/in/ed-roney-0a750b6/' rel='noreferrer' target='_blank'>linkedIn</a></li>
                            </ul>
                        </div>
                        <img className={styles.headshot} src='/EdRoneyHeadshot.jpeg' alt='Edward Roney headshot' />
                    </div>
                </div>
            </div>
            <div className={styles.subFooter}>
                <h3 className={styles.dba}>Edward Roney Consulting LLC.</h3>
                <p className={styles.dev}>Web Design - <a href='https://www.katrinacloyd.com/' rel='noreferrer' target='_blank'>Katrina Cloyd</a>, 2021</p>
            </div>
        </footer>
    )
}
