import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getAllProductsThunk } from "../../store/product"
import './ProductDetails.css'
import { getAllShopsThunk } from '../../store/shop'
import { populateCartThunk } from '../../store/cart'
import CreateReviewModal from '../CreateReviewModal'
import OpenModalButton from "../OpenModalButton";
import { getAllReviewsThunk } from '../../store/review'

const ProductDetails = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const products = useSelector(state => state.products.allProducts)
    const reviews = useSelector(state => state.reviews)
    const shop = useSelector(state => state.shops.allShops)
    const sessionUser = useSelector(state => state.session.user);
    const [purchaseItem, setPurchaseItem] = useState(false)
    let { productId } = useParams()
    productId = parseInt(productId)

    useEffect(() => {
        dispatch(getAllProductsThunk())
        dispatch(getAllShopsThunk())
        dispatch(getAllReviewsThunk())
    }, [dispatch])

    const singleProduct = products[productId]
    const productShop = singleProduct?.shop_id
    const singleShop = shop[productShop]
    if (!singleProduct) return <h1>Product loading...</h1>

    //pull review for this product
    const reviewArray = Object.values(reviews)
    const productReviews = reviewArray.filter(review => review.product === productId)



    console.log('productreviews', productReviews)


    //add product to cart function
    const onClick = () => {

        dispatch(populateCartThunk(singleProduct.id))

        setPurchaseItem(true)

        setTimeout(function () {
            setPurchaseItem(false);
        }, 1000);

    }




    return (
        <>
            <div className='projectDetailsContainer'>
                <div>
                    <div className='imageContainerDetails'>
                        <img src={singleProduct?.main_image} alt='' className='imgDetails' />
                    </div>
                    {sessionUser ? < div className='reviewButtonDetails'> <OpenModalButton
                        buttonText='Leave a product review'
                        className='reviewbutton'
                        modalComponent={<CreateReviewModal productId={singleProduct?.id} />} /> </div>  : ''}
                    {productReviews.map(review => {
                        return (
                            <div className='reviewContainer'>
                                <div className='reviewtextproductdetails'>
                                    <div className='cumulativestarrating'><i className="fas fa-star"> </i>  {((review.item_quality_rating + review.shipping_rating + review.customer_service_rating) / 3).toFixed(1)}</div>
                                    <div >{review.content}</div>
                                    <p className='reviewuser'><i class="fa-regular fa-user"></i> {review.userDetails.username}</p>
                                </div>
                                <div className='starratingreviewcontainer'>
                                    <div className='reviewcatname'>Item quality </div>
                                    <div>{
                                        [...Array(review.item_quality_rating).keys()].map(item=><i className="fas fa-star"></i>)
                                        }</div>
                                    <div className='reviewcatname'>Shipping </div>
                                    <div>{[...Array(review.shipping_rating).keys()].map(item=><i className="fas fa-star"></i>)}</div>
                                    <div className='reviewcatname'>Customer service </div>
                                    <div>{[...Array(review.customer_service_rating).keys()].map(item=><i className="fas fa-star"></i>)}</div>
                                </div>
                            </div>
                        )
                    })}
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
