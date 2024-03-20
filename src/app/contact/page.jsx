// "use client";
import styles from './contact.module.css'
import Image from 'next/image'

const ContactPage = () => {
    // const a = Math.random()
    // console.log(a)

     return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" sizes='"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"' priority alt='ad' fill/>
            </div>
            <div className={styles.formContainer}>
                {/* <HydrationTestNoSSR/> */}
                {/* <div suppressHydrationWarning>
                    {a}
                </div> */}
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Name and Surname'/>
                    <input type="text" placeholder='Email Adress'/>
                    <input type="text" placeholder='Phone Number (Optional)'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage