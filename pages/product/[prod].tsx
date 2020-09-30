import Layout from "../../components/Layout";
import Results from "../../components/Products/Results";
import ProductDetailHeader from "../../components/Products/templates/ProductDetailHeader";

export default function ProductDetail() {
    return (
        <Layout>
            <ProductDetailHeader/>
            <Results/>
        </Layout>

    )
}
