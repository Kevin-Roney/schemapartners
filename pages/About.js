import styles from '../styles/About.module.css'
//
export default function About() {
    return (
        <main className={styles.about}>
            <section className={styles.aboutContainer} >
                <div>
                    <img className={styles.headshot} src='/EdRoneyHeadshot.jpeg' alt='Edward Roney headshot' />
                    <h2 className={styles.name}>Edward Roney, CVA</h2>
                    <h3>Managing Partner</h3>
                    <a href='mailto: edward@schemapartners.com'>Email</a>
                    <a href='https://www.linkedin.com/in/ed-roney-0a750b6/' rel='noreferrer' target='_blank'>linkedIn</a>
                    <p>Ed is an accomplished M&A leader with the rare experience that comes from planning and executing dozens of successfully closed transactions. He has spent the past ten years working with Northwest companies as an independent M&A advisor and project manager helping businesses create value through combinations, representing both buyers and sellers.</p>
                    <p>Over this time, Ed has honed a talent for capturing not only the fair value of a business, but also the story behind the value that resonates with buyers and sellers alike. Telling the story correctly becomes especially important in litigation and other disputes.</p>
                    <p>Prior to starting Schema Partners, Ed was the Director of Corporate Development at Tektronix, closing transactions with NYSE-traded multinationals as well as with pre-revenue startups in high technology, and all types in between. When Tektronix itself was acquired, Ed transitioned to the acquiring company, Danaher, to close six more acquisitions in the following years. Danaher is a recognized world leader in growth via acquisitions, with well-studied best practices in M&A that Ed continues to draw from today.</p>
                    <p>Ed is accredited as a Certified Valuation Analyst from the National Association of Certified Valuators and Analysts (NACVA).</p>
                </div>
            </section>
        </main>
    )
}
