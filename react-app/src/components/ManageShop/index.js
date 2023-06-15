import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleShopThunk } from '../../store/shop'
import OpenModalButton from "../OpenModalButton";
import NewShopFormModal from '../NewShopFormModal';

const ManageShop = () => {
    // const dispatch = useDispatch()

    // const singleShop = useSelector(state => state.shops.singleShop)
    // const { shopId } = useParams()
    // console.log('single shop', singleShop)

    // useEffect(() => {
    //     dispatch(getSingleShopThunk(shopId))
    // }, [dispatch, shopId])

    // if (!singleShop) return <h1>Shop loading...</h1>

    // if ( shopId == ':shopId' ) return <ManageShop />

    return (
        <>

            <OpenModalButton
              buttonText="Open a shop"
              modalComponent={<NewShopFormModal />}
            />


        </>
    )

}

export default ManageShop
