import Layout from "@/components/Layout"
import Link from "next/link"

export default function Products() {
    return <Layout>
        <Link className="bg-blue-900 text-white py-2 px-2 rounded-md" href={'/product/new'}>Add new product</Link>
    </Layout>
}
