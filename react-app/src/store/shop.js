const normalizeObj = (arr) => {
    const obj = {};
    arr.forEach((ele) => obj[ele.id] = ele );
    return obj;
}

// TYPE VARIABLES

const GET_ALL_SHOPS = 'shops/GET_ALL_SHOPS'



// ACTION CREATORS

const getAllShops = (shops) => {
    return {
        type: GET_ALL_SHOPS,
        shops
    }
}


// THUNKS

export const getAllShopsThunk = () => async (dispatch) => {
    const res = await fetch('/api/shops/')
    if (res.ok) {
        const { shops } = await res.json()
        dispatch(getAllShops(shops))
        return
    } else {
        console.log("Problem with loading all shops")
    }
}

// --------- INITIAL STATE -------------
const initialState = { allShops: {}, singleShop: {} }
// ---------- REDUCER ----------
const shopReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_SHOPS:
            return { ...state, allShops: { ...normalizeObj(action.shops) } }
        default:
            return state
    }

}

export default shopReducer;
