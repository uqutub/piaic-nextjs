import Head from 'next/head'
import Link from 'next/link'

export default function User({ users }: { users: any[] }) {

    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <main>
                <h1>Users Page</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link href={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
        props: {
            users,
        },
    }
}