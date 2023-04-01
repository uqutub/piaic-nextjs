import Head from 'next/head'
import { useRouter } from 'next/router'

export default function BlogSlug() {
    const router = useRouter();
    const { blog_slug } = router.query;

    return (
        <>
            <Head>
                <title>{blog_slug}</title>
            </Head>
            <main>
                <h1>This is the {blog_slug}</h1>
            </main>
        </>
    )
}