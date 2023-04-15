import Head from 'next/head'
import { useRouter } from 'next/router'

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;

    // API get product data by ID
    // const product = await fetch(`https://api.daraz.com.bd/rest/products/${id}`)

    return (
        <>
            <Head>
                <title>{id}</title>
            </Head>
            <main>
                <h1>This is the product id {id}</h1>
                {/* title, description, imageUrl, price, etc. */}
            </main>
        </>
    )
}

// daraz/image/[image_id].tsx
// daraz/product/[product_id]/image/[image_id].tsx
// daraz                           - Folder
//     product                     - Folder
//         [product_id]            - Folder
//             index.tsx           - File.tsx
//             image               - Folder
//                 [image_id].tsx  - File.tsx