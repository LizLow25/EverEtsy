import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleShopThunk } from '../../store/shop'
import OpenModalButton from "../OpenModalButton";
import DeleteShopModal from '../DeleteShopModal'
import UpdateShopModal from '../UpdateShopModal';

const ShopDetails = () => {
    const dispatch = useDispatch()

    const singleShop = useSelector(state => state.shops.singleShop)
    const sessionUser = useSelector(state => state.session.user);
    const { shopId } = useParams()
    console.log('single shop', singleShop)

    useEffect(() => {
        dispatch(getSingleShopThunk(shopId))
    }, [dispatch, shopId])

    if (!singleShop) return <h1>Shop loading...</h1>


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
                {sessionUser ? sessionUser.shop[0]?.id == singleShop.id ? <OpenModalButton
                        buttonText="Delete your shop"
                        modalComponent={<DeleteShopModal id={singleShop.id}/>}
                    /> : null : null}
                {sessionUser ? sessionUser.shop[0]?.id == singleShop.id ? <OpenModalButton
                        buttonText="Update your shop"
                        modalComponent={<UpdateShopModal id={singleShop.id}/>}
                    /> : null : null}
            </div>


        </>
    )

}

export default ShopDetails
