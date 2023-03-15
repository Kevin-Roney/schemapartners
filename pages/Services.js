import React from 'react'
import styles from '../styles/Services.module.css'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function Services() {
    return (
        <main className={styles.root}>
            <div className={styles.homeSectionWrapper}>
                <section className={styles.buySell}>
                    <span className={styles.title}>For Buyers</span>
                    <hr />
                    <blockquote>
                        “Price is what you pay. Value is what you get.”
                        <p>- Warren Buffet</p>
                    </blockquote>
                    <p>Schema Partners offers 20+ years of M&A experience, with billions in deal value, for strategic buyers and investors looking for advice or a virtual corporate development team. We can assist with valuations, market research or due diligence as needed, or manage the acquisition process end-to-end, from target assessment to signed agreements.</p>
                    <p>Experienced across a broad range of markets, including Technology, Health Services, Insurance and Consumer Products.</p>
                </section>
                <section className={styles.buySell}>
                    <span className={styles.title}>For Sellers</span>
                    <hr />
                    <p>You’ve built your business with years of hard work. You want an exit that maximizes your benefits: fair price, good tax treatment and a clean sale. Schema Partners has successfully represented sellers from pre-revenue through full maturity, from several million dollars of value to hundreds of millions, across many industries.</p>
                    <p>We work with ownership to create a very defensible valuation scenario that takes into account all your tangible and intangible assets, as well as any synergies (cost savings) afforded the buyer. We can also provide marketing assistance, locate and evaluate potential buyers, manage due diligence and negotiate terms, as needed.</p>
                </section>
            </div>
            <div className={styles.videoSectionWrapper}>
                <section className={styles.videoSection}>
                    <span className={styles.title}>Preparing for the Sale of a Business:</span>
                    <hr />
                    <YoutubeEmbed embedId='TPvbEH-hlmI' />
                </section>
                <section className={styles.videoSection}>
                    <span className={styles.title}>Why a NACVA Certified Valuation Analyst:</span>
                    <hr />
                    <YoutubeEmbed embedId='3dSBTOvDK1A' />
                </section>
            </div>
        </main>
    )
}
