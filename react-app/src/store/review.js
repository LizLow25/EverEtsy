const normalizeObj = (arr) => {
    const obj = {};
    arr.forEach((ele) => obj[ele.id] = ele );
    return obj;
}


const GET_ALL_REVIEWS = 'product/GET_ALL_REVIEWS'

const getAllReviews = (reviews) => {
    return {
        type: GET_ALL_REVIEWS,
        reviews
    }
}


//THUNKS

export const getAllReviewsThunk = () => async (dispatch) => {
    const res = await fetch('/api/reviews/')
    if (res.ok) {
        const { reviews } = await res.json()
        dispatch(getAllReviews(reviews))
        return
    } else {
        console.log("Problem with loading all reviews")
    }

}

export const createReviewThunk = (review) => async (dispatch) => {

    const res = await fetch('/api/reviews/new', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review)
      })

    if (res.ok) {
        const { review } = await res.json()
        console.log('review?', review)

    } else {
        console.log("Problem with creating a new review", res)
    }


}



const reviewReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_ALL_REVIEWS:
            return { ...state, ...normalizeObj(action.reviews) }
        default:
            return state
    }

}

export default reviewReducer;
