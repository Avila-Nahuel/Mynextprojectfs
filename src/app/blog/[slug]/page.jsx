/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import styles from './singlePost.module.css'
import { actionAsyncStorage } from 'next/dist/client/components/action-async-storage.external'

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

    if(!res.ok){
        throw new Error("Something went wrong")
    }

    return res.json()
}

const SinglePostPage = async ({params}) => {
    const {slug} = params
    const post = await getData(slug)
    
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='https://images.pexels.com/photos/20115405/pexels-photo-20115405/free-photo-of-verano-arbusto-matorral-jardin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                fill
                className={styles.img}></Image>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image
                    className={styles.avatar}
                    src='https://images.pexels.com/photos/20115405/pexels-photo-20115405/free-photo-of-verano-arbusto-matorral-jardin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    width={50}
                    height={50}></Image>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage