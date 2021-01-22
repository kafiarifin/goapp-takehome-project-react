import useProductDetails from "./hooks/useProductDetails";

const ProductDetails = () => {
    const { fetchProduct, productData } = useProductDetails()
    return (
        <>
            {productData.name}
        </>
    )
}

export default ProductDetails;