const normalizeObj = (arr) => {
    const obj = {};
    arr.forEach((ele) => obj[ele.id] = ele );
    return obj;
}

// TYPE VARIABLES

const GET_ALL_SHOPS = 'shop/GET_ALL_SHOPS'
const GET_SINGLE_SHOP = 'product/GET_SINGLE_SHOP'


// ACTION CREATORS

const getAllShops = (shops) => {
    return {
        type: GET_ALL_SHOPS,
        shops
    }
}
const getSingleShop = (shop) => {
    return {
        type: GET_SINGLE_SHOP,
        shop
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

export const getSingleShopThunk = (id) => async (dispatch) => {
    console.log('inside single product thunk', id)
    const res = await fetch(`/api/shops/${id}`)

    if (res.ok) {
        const { shop } = await res.json()
        dispatch(getSingleShop(shop))
        return
    } else {
        console.log("Problem with loading single shops")
    }
}

// --------- INITIAL STATE -------------
const initialState = { allShops: {}, singleShop: {} }
// ---------- REDUCER ----------
const shopReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_SHOPS:
            return { ...state, allShops: { ...normalizeObj(action.shops) } }
        case GET_SINGLE_SHOP:
            return { ...state, singleShop: { ...action.shop } }
        default:
            return state
    }

}

export default shopReducer;
