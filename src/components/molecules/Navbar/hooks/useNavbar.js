import { useEffect, useState } from "react";
import t from 'typy';
import { useDispatch, useSelector } from "react-redux";
import { fetchingSelector, businessInfoDataSelector } from "../../../../redux/BusinessInfo/selectors";
import { businessInfo } from '../../../../redux/BusinessInfo/actions'

export default function useNavbar() {

    const dispatch = useDispatch()
    const businessInfoData = useSelector(businessInfoDataSelector)
    const fetchBusinessInfo = useSelector(fetchingSelector)

    useEffect(() => {
        dispatch(businessInfo.request())
    }, [dispatch])

    const imageLogo = t(businessInfoData, 'logo.image_url').safeObject;
    const altLogo = t(businessInfoData, 'name').safeObject;

    return {
        fetchBusinessInfo,
        businessInfoData,
        imageLogo,
        altLogo,
    }
}