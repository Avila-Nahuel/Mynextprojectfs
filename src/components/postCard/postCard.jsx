import Link from 'next/link'
import styles from './postCard.module.css'
import Image from 'next/image'

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='/post.png' alt='' fill className={styles.img}></Image>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Desc</p>
                <Link className={styles.link} href='/blog/post'>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard