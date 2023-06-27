import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getAllProductsThunk } from "../../store/product"
import './ProductDetails.css'
import { getAllShopsThunk } from '../../store/shop'
import { populateCartThunk } from '../../store/cart'


const ProductDetails = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const products = useSelector(state => state.products.allProducts)
    const shop = useSelector(state => state.shops.allShops)
    let { productId } = useParams()
    productId = parseInt(productId)

    useEffect(() => {
        dispatch(getAllProductsThunk())
        dispatch(getAllShopsThunk())
    }, [dispatch])

    const singleProduct = products[productId]
    const productShop = singleProduct?.shop_id
    // console.log('singleproduct', singleProduct, productShop)
    const singleShop = shop[productShop]
    // console.log('single shop', singleShop)

    if (!singleProduct) return <h1>Product loading...</h1>

    const onClick = () => {
        console.log('hello')
        dispatch(populateCartThunk(singleProduct.id))

      }



    return (
        <>
            <div className='projectDetailsContainer'>
                <div className='imageContainerDetails'>
                    <img src={singleProduct?.main_image} alt='' className='imgDetails'/>
                </div>
                <div className='textContainerDetails'>
                    <h2>${singleProduct.price?.toFixed(2)}</h2>
                    <h2>{singleProduct.name}</h2>
                    <h3 className='categoryproduct'>{singleProduct.category}</h3>
                    <p className='shopNameDetails' onClick={() => history.push(`/shops/${singleShop.id}`)} >{singleShop?.name}</p>
                    <button onClick={onClick} className='buttonDetails'>Add to cart</button>
                    <h2>Description</h2>
                    <p>{singleProduct.details}</p>
                </div>
            </div>


        </>
    )

}

export default ProductDetails;
