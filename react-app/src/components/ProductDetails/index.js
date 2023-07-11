import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getAllProductsThunk } from "../../store/product"
import './ProductDetails.css'
import { getAllShopsThunk } from '../../store/shop'
import { populateCartThunk } from '../../store/cart'
import CreateReviewModal from '../CreateReviewModal'
import OpenModalButton from "../OpenModalButton";

const ProductDetails = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const products = useSelector(state => state.products.allProducts)
    const shop = useSelector(state => state.shops.allShops)
    const sessionUser = useSelector(state => state.session.user);
    const [purchaseItem, setPurchaseItem] = useState(false)
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

        dispatch(populateCartThunk(singleProduct.id))

        setPurchaseItem(true)

        setTimeout(function () {
            setPurchaseItem(false);
        }, 1000);

    }

    const clickReview = () => {

    }





    return (
        <>
            <div className='projectDetailsContainer'>
                <div>
                    <div className='imageContainerDetails'>
                        <img src={singleProduct?.main_image} alt='' className='imgDetails' />
                    </div>
                    {sessionUser ? <><i class="fa-solid fa-feather"></i><OpenModalButton
                    buttonText='Leave a product review'
                    className='reviewbutton'
                    modalComponent={<CreateReviewModal />} /> </>: ''}
                </div>
                <div className='textContainerDetails'>
                    <h2>${singleProduct.price?.toFixed(2)}</h2>
                    <h2>{singleProduct.name}</h2>
                    <p className='shopNameDetails' onClick={() => history.push(`/shops/${singleShop.id}`)} >{singleShop?.name}</p>

                    <h3 className='categoryproduct'>{singleProduct.category}</h3>
                    {purchaseItem ? <p className='cartadded'>Added to cart!</p> : ''}
                    {sessionUser ? <button onClick={onClick} className={'buttonDetails' + (purchaseItem ? " special" : "")}>Add to cart</button> : ''}
                    <h2>Description</h2>
                    <p>{singleProduct.details}</p>
                </div>
            </div>



        </>
    )

}

export default ProductDetails;
