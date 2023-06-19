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
const UPDATE_SHOP = 'shop/UPDATE_SHOP'
const CURRENT_SHOP = 'shop/CURRENT_SHOP'


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

const updateShop = (id, shop) => {
    return {
        type: UPDATE_SHOP,
        id,
        shop
    }
}

const getOwnerShop = (shop) => {
    return {
        type: CURRENT_SHOP,
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

export const updateShopThunk = (id, shop) => async (dispatch) => {

    const res = await fetch(`/api/shops/${id}/edit`, {
        method: "PUT",
        body: shop
      })

    if (res.ok) {
        const { shop } = await res.json()
        await dispatch(updateShop(id, shop))
        console.log('res is ok', shop)
        return shop
    } else {
        console.log("Problem with updating the shop", res)
    }

}

export const getShopByOwnerThunk = () => async (dispatch) => {
    const res = await fetch('/api/shops/current')
    console.log('inside current thunk')

    if (res.ok) {
        const { shop } = await res.json()
        await dispatch(getOwnerShop(shop))
        return
    } else {
        console.log("Problem with loading owners shop")
        await dispatch(getOwnerShop({}))
        return null
    }

}

// --------- INITIAL STATE -------------
const initialState = { allShops: {}, singleShop: {}, currentShop: {} }
// ---------- REDUCER ----------
const shopReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_SHOPS:
            return { ...state, allShops: { ...normalizeObj(action.shops) } }
        case GET_SINGLE_SHOP:
            return { ...state, singleShop: { ...action.shop } }
        case CREATE_NEW_SHOP:
            return { ...state, currentShop: { ...action.shop } }
        case DELETE_SHOP:
            return { ...state, currentShop: {} }
        case UPDATE_SHOP:
            return {...state, currentShop: { ...action.shop}}
        case CURRENT_SHOP:
            return {...state, currentShop: { ...action.shop }}
        default:
            return state
    }

}

export default shopReducer;
