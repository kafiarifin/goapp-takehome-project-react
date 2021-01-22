import t from 'typy';
import NumberFormat from 'react-number-format';
import useProductDetails from "./hooks/useProductDetails";

const ProductDetails = () => {
    const { fetchProduct, productData } = useProductDetails()

    const productUid = t(productData, 'uid').safeObject;
    const productKey = t(productData, 'key').safeObject;
    const productName = t(productData, 'name').safeObject;
    const productImage = t(productData, 'primary_image_url').safeObject;
    const productPrice = t(productData, 'original_price.price').safeObject;

    console.log(productData);
    return fetchProduct
        ? <div>Loading...</div>
        : (
            <>
                {productName}
                {productPrice}
            </>
        )
}

export default ProductDetails;