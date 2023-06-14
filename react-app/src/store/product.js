const normalizeObj = (arr) => {
    const obj = {};
    arr.forEach((ele) => obj[ele.id] = ele );
    return obj;
}

// TYPE VARIABLES

const GET_ALL_PRODUCTS = 'product/GET_ALL_PRODUCTS'

const GET_SINGLE_PRODUCT = 'product/GET_SINGLE_PRODUCT'



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


// THUNKS

export const getAllProductsThunk = () => async (dispatch) => {
    const res = await fetch('/api/products/')
    if (res.ok) {
        const { products } = await res.json()
        dispatch(getAllProducts(products))
        return
    } else {
        console.log("Problem with loading all shops")
    }
}

export const getSingleProductThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/projects/${id}`)
    if (res.ok) {
        const { product } = await res.json()
        dispatch(getSingleProduct(product))
        return
    } else {
        console.log("Problem with loading all shops")
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
            return { ...state, singleProduct: { ...normalizeObj(action.product) } }
        default:
            return state
    }

}

export default productReducer;
