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
                            <li>Valuations</li>
                            <li>Aquisition</li>
                            <li>Assessment</li>
                            <li>Market Research</li>
                        </ul>
                    </div>
                    <div className={styles.footerNavBlock}>
                        <h3><Link href='/About'>ABOUT</Link></h3>
                        <ul>
                            <li>Certified Valuation Analyst</li>
                            <li>M&A Advisor</li>
                            <li>Process Manager</li>
                        </ul>
                    </div>
                    <div className={styles.footerContactBlock}>
                        <div>
                            <h3><Link href='/Contact'>CONTACT</Link></h3>
                            <ul>
                                <li><b>Edward Roney</b></li>
                                <li className={styles.contactLinks}><a href='mailto: edward@schemapartners.com'>Email</a></li>
                                <li className={styles.contactLinks}><a href='https://www.linkedin.com/in/ed-roney-0a750b6/' rel='noreferrer' target='_blank'>linkedIn</a></li>
                            </ul>
                        </div>
                        <img className={styles.headshot} src='/EdRoneyHeadshot.jpeg' alt='Edward Roney headshot' />
                    </div>
                </div>
            </div>
            <div className={styles.subFooter}>
                <div className={styles.dba}>
                    <h3>Schema Partners</h3>
                    <p>Portland, OR</p>
                </div>
                <p className={styles.dev}>Web Design - <a href='https://www.katrinacloyd.com/' rel='noreferrer' target='_blank'>Katrina Cloyd</a>, 2021</p>
            </div>
        </footer>
    )
}
