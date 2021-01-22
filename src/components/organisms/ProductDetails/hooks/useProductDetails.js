import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import t from 'typy';
import { useDispatch, useSelector } from "react-redux";
import { fetchingSelector, productDataSelector } from "../../../../redux/Product/selectors";
import { product } from '../../../../redux/Product/actions';

export default function useProductDetails(props) {

    const dispatch = useDispatch()
    const productData = useSelector(productDataSelector)
    const fetchProduct = useSelector(fetchingSelector)

    let { id } = useParams();
    console.log(id, 'use id');
    useEffect(() => {
        dispatch(product.requestOne(id))
    }, [dispatch])

    return {
        fetchProduct,
        productData,
    };
}