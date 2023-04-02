'use client'

import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, increment } from '@/store/action/user'
import { AppDispatch } from '@/store/store'

export default function User({ users }: { users: any[] }) {

    const { entities, loading, counter } = useSelector((state: any) => state.user)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <main>
                <h1 style={{ marginBottom: 10 }}>Users Page</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link href={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>

                <div style={{ background: 'grey', marginTop: 20, padding: 10 }}>
                    <h3>Counter Reducer Demo: {counter}</h3>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                </div>
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