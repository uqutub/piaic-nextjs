import Head from 'next/head'
import { useRouter } from 'next/router'

export default function UserSlug({ data }: any) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Head>
                <title>{`User-${id}`}</title>
            </Head>
            <main>
                <h1 style={{ marginBottom: 20 }}>User: {data.name} ({data.username})</h1>
                <p style={{ marginBottom: 20 }}>Email: {data.email}</p>
                <p style={{ marginBottom: 20 }}>Phone: {data.phone}</p>
                <label>Address:</label>
                <pre>
                    {JSON.stringify(data.address, null, 2)}
                </pre>

            </main>
        </>
    )
}

// generate static path for each user
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    const paths = users.map((user: any) => ({
        params: {
            id: user.id.toString()
        },
    }));

    return {
        paths,
        fallback: false
    }

}

// get static props for each user
export async function getStaticProps(context: any) {
    const { params } = context;
    const { id } = params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}