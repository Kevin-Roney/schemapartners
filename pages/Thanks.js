import styles from '../styles/Contact.module.css'

export default function Thanks() {
    return (
        <main className={styles.root}>
            <h2 className={styles.heading}>
                Thanks for your inquiry.
            </h2>
            <p className={styles.paragraph}>We will be in touch as soon as we are able to.</p>
        </main>
    )
}