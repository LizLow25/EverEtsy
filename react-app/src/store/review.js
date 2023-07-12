const normalizeObj = (arr) => {
    const obj = {};
    arr.forEach((ele) => obj[ele.id] = ele );
    return obj;
}


const GET_ALL_REVIEWS = 'review/GET_ALL_REVIEWS'
const DELETE_REVIEW = 'review/DELETE_REVIEW'

const getAllReviews = (reviews) => {
    return {
        type: GET_ALL_REVIEWS,
        reviews
    }
}

const deleteReview = (id) => {
    return {
        type: DELETE_REVIEW,
        id
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

export const deleteReviewThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${id}`, {
        method: "DELETE"
      })
      if (res.ok) {
       dispatch(deleteReview(id))
      }

}



const reviewReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_ALL_REVIEWS:
            return { ...state, ...normalizeObj(action.reviews) }
        case DELETE_REVIEW:
            let newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state
    }

}

export default reviewReducer;
