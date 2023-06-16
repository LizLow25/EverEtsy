const normalizeObj = (arr) => {
    const obj = {};
    arr.forEach((ele) => obj[ele.id] = ele );
    return obj;
}

// TYPE VARIABLES

const GET_ALL_SHOPS = 'shop/GET_ALL_SHOPS'
const GET_SINGLE_SHOP = 'shop/GET_SINGLE_SHOP'
const CREATE_NEW_SHOP = 'shop/CREATE_NEW_SHOP'
const DELETE_SHOP = 'shop/DELETE_SHOP'


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

const createNewShop = (shop) => {
    return {
        type: CREATE_NEW_SHOP,
        shop
    }
}

const deleteShop = (id) => {
    return {
        type: DELETE_SHOP,
        id
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
    // console.log('inside single product thunk', id)
    const res = await fetch(`/api/shops/${id}`)

    if (res.ok) {
        const { shop } = await res.json()
        await dispatch(getSingleShop(shop))
        return
    } else {
        console.log("Problem with loading single shops")
    }
}

export const newShopThunk = (shop) => async (dispatch) => {
    const res = await fetch('/api/shops/new', {
        method: "POST",
        body: shop
      })

    if (res.ok) {
        const { shop } = await res.json()
        await dispatch(createNewShop(shop))
        return shop
    } else {
        console.log("Problem with creating a new shop", res)
    }
}

export const deleteShopThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/shops/${id}`, {
        method: "DELETE"
      })
      if (res.ok) {
        dispatch(deleteShop(id))
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
        case CREATE_NEW_SHOP:
            return { ...state, singleShop: { ...action.shop } }
        case DELETE_SHOP:

        default:
            return state
    }

}

export default shopReducer;
