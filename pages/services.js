export default function Services({ b }) {
    return <h1>Services</h1>
}

export async function getServerSideProps() {
    return {
        props: {
            b: "v0.0.2"
        }
    }
}