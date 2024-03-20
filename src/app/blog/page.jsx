import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'

const BlogPage = ({params,searchParams}) => {
    console.log(searchParams)
    return(
        <div className={styles.container}>
            <div className={styles.post}>
                <PostCard></PostCard>
            </div>
            <div className={styles.post}>
                <PostCard></PostCard>
            </div>
            <div className={styles.post}>
                <PostCard></PostCard>
            </div>
            <div className={styles.post}>
                <PostCard></PostCard>
            </div>
        </div>
    )
}

export default BlogPage