import ProductsLayout from "../components/products/ProductsLayout"

export default function Services({ b }) {
    return <ProductsLayout>
        <h1>Services</h1>
    </ProductsLayout>
}

export async function getServerSideProps() {
    return {
        props: {
            b: "v0.0.2"
        }
    }
}