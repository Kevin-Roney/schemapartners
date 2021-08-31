import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className={styles.headLogoContainer}>
                <Link href='/'>
                    <a>
                        <img className={styles.headLogo} src='/SchemaPartners-MainLogo.svg' alt='Schema Partners Logo' />
                    </a>
                </Link>
            </div>
            <div className={styles.navLinkListContainer}>
                <nav className={styles.navLinkList}>
                    <input type='checkbox' id='checkbox' className={styles.navCheckbox} />
                    <label htmlFor='checkbox' className={styles.navToggle}>
                        <img src='/Burger.svg' alt='expand menu icon' className={styles.menuOpen} />
                        <img src='/Close.svg' alt='close icon' className={styles.menuClose} />
                    </label>

                    <h4 className={styles.selected}><Link href='/'>home</Link></h4>
                    <h4><Link href='#'>services</Link></h4>
                    <h4><Link href='#'>about</Link></h4>
                    <h4><Link href='#'>contact</Link></h4>
                </nav>
            </div>
        </header>
    )
}
