import Head from 'next/head'
import Image from 'next/image'
import WithLayout from '../hoc/withLayout'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Hello World</div>
    </div>
  )
}

export default WithLayout(Home)


