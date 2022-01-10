import styles from '../styles/Contact.module.css'

export default function Thanks() {
    return (
        <main className={styles.root}>
            <h2 className={styles.heading}>
                Sorry.
            </h2>
            <p className={styles.paragraph}>Something went wrong. Please try the form again, or you can email us directly <a href='mailto: edward@schemapartners.com'>here</a>. </p>
        </main>
    )
}