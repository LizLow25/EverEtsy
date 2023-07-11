

//THUNKS

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

        default:
            return state
    }

}

export default reviewReducer;
