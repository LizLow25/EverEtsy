import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleShopThunk } from '../../store/shop'
import ManageShop from '../ManageShop'
import OpenModalButton from "../OpenModalButton";
import NewShopFormModal from '../NewShopFormModal';

const ShopDetails = () => {
    const dispatch = useDispatch()

    const singleShop = useSelector(state => state.shops.singleShop)
    const { shopId } = useParams()
    console.log('single shop', singleShop)

    useEffect(() => {
        dispatch(getSingleShopThunk(shopId))
    }, [dispatch, shopId])

    if (!singleShop) return <h1>Shop loading...</h1>

    if (shopId == ':shopId') {
        return (
            <>

                <OpenModalButton
                    buttonText="Open a shop"
                    modalComponent={<NewShopFormModal />}
                />


            </>
        )

    }

    return (
        <>
            <div className='shopDetailsContainer'>
                <div className='shopContainerDetails'>
                    <img src={singleShop.shop_image} alt='' className='imgShopDetails' />
                </div>
                <div className='textShopContainerDetails'>
                    <p>{singleShop.name}</p>
                    <p>{singleShop.description}</p>

                </div>
            </div>


        </>
    )

}

export default ShopDetails
