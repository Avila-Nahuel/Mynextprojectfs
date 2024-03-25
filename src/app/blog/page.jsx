import PostCard from '@/components/postCard/postCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate:3600}})

//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }

//     return res.json()
// }

const BlogPage = async ({params}) => {
    const {slug} = params
 const posts = await getPosts(slug)
//    const posts = await getData()
    return(
        <div className={styles.container}>
            {posts.map(post=>(
            <div className={styles.post} key={post.id}>
                <PostCard post={post}></PostCard>
            </div>
            ))}
        </div>
    )
}

export default BlogPage