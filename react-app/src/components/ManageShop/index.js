import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleShopThunk } from '../../store/shop'


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
            <button>Create New Shop</button>


        </>
    )

}

export default ManageShop
