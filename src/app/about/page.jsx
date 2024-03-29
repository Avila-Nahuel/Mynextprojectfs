import Image from "next/image"
import styles from './about.module.css'

const AboutPage = () => {
    //console.log("lets check where its works")
    return(
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>About Agency</h2>
            <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
            <p className={styles.description}>We create digital ideas that are bigger, bolder, braver and better.
                We believe in good ideas flexibility and precission we are word is 
                Our Special Team best consulting & finance solution provider. Wide 
                reange of web software development services.
            </p>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Year of experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Year of experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Year of experience</p>
                </div>
            </div>
        </div>
            <div className={styles.imgContainer}>
                <Image
                src='/about.png'
                alt="About img"
                fill
                className={styles.img}/>
            </div>   
    </div>
    )
}

export default AboutPage