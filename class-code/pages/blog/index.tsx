import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {

    const blogs = [
        { slug: 'title1', name: 'Title 1' },
        { slug: 'title2', name: 'Title 2' },
        { slug: 'title3', name: 'Title 3' },
    ];

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <main>
                <h1>Blog Page</h1>
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.slug}>
                            <Link href="/">{blog.name}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}