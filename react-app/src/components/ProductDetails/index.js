import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleProductThunk } from "../../store/product"
import './ProductDetails.css'


const ProductDetails = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const singleProduct = useSelector(state => state.products.singleProduct)
    const { productId } = useParams()

    useEffect(() => {
        dispatch(getSingleProductThunk(productId))
    }, [dispatch, productId])

    if (!singleProduct) return <h1>Product loading...</h1>

    return (
        <>
            <div className='projectDetailsContainer'>
                <div className='imageContainerDetails'>
                    <img src={singleProduct.main_image} alt='' className='imgDetails'/>
                </div>
                <div className='textContainerDetails'>
                    <h2>${singleProduct.price}</h2>
                    <h2>{singleProduct.name}</h2>
                    <p className='shopNameDetails' onClick={() => history.push(`/shops/${singleProduct.shop.id}`)} >{singleProduct.shop?.name}</p>
                    <button className='buttonDetails'>Add to cart</button>
                    <h3>Description</h3>
                    <p>{singleProduct.details}</p>
                </div>
            </div>


        </>
    )

}

export default ProductDetails;
