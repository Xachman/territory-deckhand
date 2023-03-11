import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const Login = () => {
    return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="container">
            <form action="/send-data-here" method="post">
                <label htmlFor="first">First name:</label>
                <input type="text" id="first" name="first" />
                <label htmlFor="last">Last name:</label>
                <input type="text" id="last" name="last" />
                <button type="submit">Submit</button>
            </form>
        </div>
      </main>
    </>
    )
}


export default Login