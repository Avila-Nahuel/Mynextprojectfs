"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/router"

const NavigationTestPage = () =>{
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    console.log(q)

    const handleClick= () =>{
        console.log("clicked")
        router.push("/")
    }
    return(
        <div>
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTestPage