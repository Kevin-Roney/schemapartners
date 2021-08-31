import styles from '../styles/Header.module.css'
import { useRouter } from "next/router"
import Link from 'next/link'

export default function Header() {
    const router = useRouter();
    const checkbox = document.querySelector('#checkbox');

    const handleMenuClick = () => {
        checkbox.checked = false;
    }

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

                    <h4 onClick={handleMenuClick}
                        className={router.asPath === '/' ? styles.selected : styles.std}>
                        <Link href='/'>home</Link></h4>
                    <h4 onClick={handleMenuClick}
                        className={router.asPath === '/Services' ? styles.selected : styles.std}>
                        <Link href='/Services'>services</Link></h4>
                    <h4 onClick={handleMenuClick}
                        className={router.asPath === '/About' ? styles.selected : styles.std}>
                        <Link href='/About'>about</Link></h4>
                    <h4 onClick={handleMenuClick}
                        className={router.asPath === '/Contact' ? styles.selected : styles.std}>
                        <Link href='/Contact'>contact</Link></h4>
                </nav>
            </div>
        </header>
    )
}
