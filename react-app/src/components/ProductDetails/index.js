import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleProductThunk } from "../../store/product"


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
        <div>
        <img src = {singleProduct.main_image} alt=''/>
        </div>


        </>
    )

}

export default ProductDetails;
