import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main >
      <section className={styles.backgroundImg} >
        <div className={styles.homeSectionWrapper}>
          <section className={styles.aboutBlurb}>
            <p><b>Schema Partners</b> provides Valuations and Financial Support for Buyers and Sellers and those contemplating a change in ownership.</p>
            <p>We bring over 20 years of real M&A experience to small and medium-sized companies in need of a certified valuation. We also can assist with the buying or selling process itself, managing due diligence, analysis and negotiations.</p>
            <p>For Business Owners, Chief Executives, Lawyers, and Investors.</p>
          </section>
          <section className={styles.prep}>
            <p><b>Prepare Today for a Change in Ownership Tomorrow:</b></p>
            <p>• 66% of business owners have no plan to transition their company, though 75% are 51 or older.</p>
            <p>• 70% of owners say getting full value for their business to fund retirement is their number 1 goal, though only 18% have obtained a valuation in the last two years.</p>
            <cite>- Exit Planning Institute, 2020</cite>
          </section>
        </div>
      </section>
      <section className={styles.taglinesWrapper}>
        <div className={styles.taglines}>
          <h2>Fair + Defensible</h2>
          <h3>Quick + Economical</h3>
        </div>
      </section>
      <section className={styles.whySection}>
        <h3 className={styles.whyHeading}>hello? </h3>
        <div className={styles.whyContainer}>
          <div className={styles.whys}><span className={styles.whyHeader}>Why #1</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invne voluptatem sequi nesciunt.</div>
          <div className={styles.whys}><span className={styles.whyHeader}>Why #2</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invne voluptatem sequi nesciunt.</div>
          <div className={styles.whys}><span className={styles.whyHeader}>Why #3</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invne voluptatem sequi nesciunt.</div>
        </div>
      </section>

      <section className={styles.valuationsWrapper}>
        <div className={styles.valuations}>
          <h3>
            Valuations:
          </h3>
          <p>There are a number of situation where a business needs a certified valuation presented by an independent valuator for legal purposes and for filings with the SEC and IRS. Valuations are also helpful for owners looking down the road to a sale or a distribution to family members in the coming years. We cover them all:</p>
          <ul>
            <li>Estate and Gift Tax</li>
            <li>Partner Admissions and Retirements</li>
            <li>Buy-sell Agreement and their Measurements</li>
            <li>Assessments of Strategic Options (such as Succession Planning, Transaction Planning, Debt and Equity Alternatives)</li>
            <li>Restricted Stock and Stock Options Election</li>
            <li>Insolvency Analysis</li>
            <li>Section 409 (a) Elections</li>
            <li>Goodwill Impairment</li>
            <li>Intellectual Property</li>
            <li>Employee Stock and Equity Awards</li>
            <li>Earn-outs on Business Sales</li>
          </ul>
        </div>
      </section>

    </main>
  )
}
