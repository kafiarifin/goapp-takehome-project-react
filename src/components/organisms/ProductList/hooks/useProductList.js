import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingSelector, productDataSelector } from "../../../../redux/Product/selectors";
import { product } from '../../../../redux/Product/actions';

export default function useProductList() {

    const dispatch = useDispatch()
    const productData = useSelector(productDataSelector)
    const fetchProduct = useSelector(fetchingSelector)

    useEffect(() => {
        dispatch(product.request())
    }, [dispatch])

    return {
        fetchProduct,
        productData,
    };
}