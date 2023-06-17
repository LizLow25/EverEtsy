const normalizeObj = (arr) => {
    const obj = {};
    arr.forEach((ele) => obj[ele.id] = ele );
    return obj;
}

// TYPE VARIABLES

const GET_ALL_PRODUCTS = 'product/GET_ALL_PRODUCTS'

const GET_SINGLE_PRODUCT = 'product/GET_SINGLE_PRODUCT'

const GET_SHOP_PRODUCTS = 'product/GET_SHOP_PRODUCTS'

const GET_CURRENT_SHOP_PRODUCTS = 'products/GET_CURRENT_SHOP_PRODUCTS'


// ACTION CREATORS

const getAllProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        products
    }
}
const getSingleProduct = (product) => {
    return {
        type: GET_SINGLE_PRODUCT,
        product
    }

}

const getShopProducts = (products) => {
    return {
        type: GET_SHOP_PRODUCTS,
        products
    }

}

const getCurrentShopProducts = (products) => {
    return {
        type: GET_CURRENT_SHOP_PRODUCTS,
        products
    }
}


// THUNKS

export const getAllProductsThunk = () => async (dispatch) => {
    const res = await fetch('/api/products/')
    if (res.ok) {
        const { products } = await res.json()
        dispatch(getAllProducts(products))
        return
    } else {
        console.log("Problem with loading all products")
    }
}

export const getSingleProductThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/products/${id}`)

    if (res.ok) {
        const { product } = await res.json()
        dispatch(getSingleProduct(product))
        return
    } else {
        console.log("Problem with loading the product")
    }
}

export const getProductsForShopThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/shops/${id}/products`)

    if (res.ok) {
        const { products } = await res.json()
        dispatch(getShopProducts(products))
        return
    } else {
        console.log("HELLO Problem with loading products for the shop")
        return null
    }

}

export const getProductsForShopOwnerThunk = () => async (dispatch) => {
    const res = await fetch('/api/shops/current/products')

    if (res.ok) {
        const { products } = await res.json()
        dispatch(getCurrentShopProducts(products))
        return
    } else {
        console.log("HELLO Problem with loading products for the shop")
        return null
    }

}

// --------- INITIAL STATE -------------
const initialState = { allProducts: {}, singleProduct: {} }
// ---------- REDUCER ----------
const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return { ...state, allProducts: { ...normalizeObj(action.products) } }
        case GET_SINGLE_PRODUCT:
            return { ...state, singleProduct: { ...action.product } }
        case GET_SHOP_PRODUCTS:
            return { ...state, allProducts: { ...normalizeObj(action.products) } }
        case GET_CURRENT_SHOP_PRODUCTS:
            return { ...state, allProducts: { ...normalizeObj(action.products) } }
        default:
            return state
    }

}

export default productReducer;
