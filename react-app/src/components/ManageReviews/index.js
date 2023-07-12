import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShopsThunk } from '../../store/shop'
import { deleteReviewThunk, getAllReviewsThunk } from '../../store/review'
import { getAllProductsThunk } from "../../store/product"
import OpenModalButton from "../OpenModalButton";
import './ManageReviews.css'
import UpdateReviewModal from '../UpdateReviewModal'

const ManageReviews = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews)
    const products = useSelector(state => state.products.allProducts)
    const shop = useSelector(state => state.shops.allShops)


    const userId = sessionUser?.id

    useEffect(() => {
        dispatch(getAllProductsThunk())
        dispatch(getAllShopsThunk())
        dispatch(getAllReviewsThunk())
    }, [dispatch])


    //pull reviews created by current user
    const reviewArray = Object.values(reviews)
    const userReviews = reviewArray.filter(review => review.userDetails.id === userId)

    //delete review

    const deleteReview = (id) => {

        //dispatch delete review
        dispatch(deleteReviewThunk(id))


    }






    return (
        <div >
            {userReviews.map(review => {
                return (
                    <div className='userreviewcontainer'>

                        <div className='managereviewContainer'>
                            <div className='productinfo'>

                                <div className='reviewimagecontainer'>
                                    <img src={products[review.product]?.main_image} className='reviewimage' />
                                </div>
                                <div className='managereviewproducttitle'>{products[review.product]?.name}</div>
                            </div>

                            <div className='manage_review_content'>
                                <div><i className="fas fa-star"> </i>  {((review.item_quality_rating + review.shipping_rating + review.customer_service_rating) / 3).toFixed(1)}</div>
                                <p>{review.content}</p>
                                <p className='reviewuser'><i class="fa-regular fa-user"></i> {review.userDetails.username}</p>
                            </div>
                            <div className='rightratings'>
                                <p>Item quality {
                                    [...Array(review.item_quality_rating).keys()].map(item => <i className="fas fa-star"></i>)
                                }</p>
                                <p>Shipping {[...Array(review.shipping_rating).keys()].map(item => <i className="fas fa-star"></i>)}</p>
                                <p>Customer service {[...Array(review.customer_service_rating).keys()].map(item => <i className="fas fa-star"></i>)}</p>
                            </div>
                        </div>
                        <div>
                            <OpenModalButton
                                buttonText="Update your review"
                                modalComponent={<UpdateReviewModal oldReview={review}/>} />
                            <button onClick={() => deleteReview(review.id)}>Delete your review</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )



}

export default ManageReviews;
