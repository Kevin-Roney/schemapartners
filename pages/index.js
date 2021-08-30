import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <main >
        <section className={styles.backgroundImg} >
          <div className={styles.services}>
            <b>Services Provided</b> unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </div>
        </section>
        <section className={styles.whySection}>
          <div className={styles.whyContainer}>
            <div className={styles.whys}><span className={styles.whyHeader}>Why #1</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invne voluptatem sequi nesciunt.</div>
            <div className={styles.whys}><span className={styles.whyHeader}>Why #2</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invne voluptatem sequi nesciunt.</div>
            <div className={styles.whys}><span className={styles.whyHeader}>Why #3</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invne voluptatem sequi nesciunt.</div>
          </div>
        </section>
        <section className={styles.expSection}>
          <div className={styles.exp}>
            <p className={styles.expHeader}><b>Summery of Expertise</b></p>
            <p>•   Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>
            <p>•   Baspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
            <p>•   Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ulla.</p>
          </div>
        </section>
      </main>
    </div >
  )
}
