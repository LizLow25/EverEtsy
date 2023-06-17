import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleShopThunk } from '../../store/shop'
import { getProductsForShopThunk } from '../../store/product'


const ShopDetails = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const singleShop = useSelector(state => state.shops.singleShop)
    const products = useSelector(state => state.products.allProducts)
    const { shopId } = useParams()


    useEffect(() => {
        dispatch(getSingleShopThunk(shopId))
        dispatch(getProductsForShopThunk(shopId))
    }, [dispatch, shopId])

    if (!singleShop) return <h1>Shop loading...</h1>
    let productArray = Object.values(products)


    return (
        <>
            <div className='shopDetailsContainer'>
                <div className='shopContainerDetails'>
                    <img src={singleShop.shop_image} alt='' className='imgShopDetails' />
                </div>
                <div className='textShopContainerDetails'>
                    <p>{singleShop.name}</p>
                    <p>{singleShop.description}</p>

                </div>

                {/* {sessionUser ? sessionUser.id == singleShop.shop_owner ? !productArray.length ? <button>Add products</button> : null : null : null} */}
            </div>

            <div className='productCardContainer'>
                {productArray?.map(product => (
                    <div key={product.id} className='productCard' onClick={(e) => {
                        history.push(`/products/${product.id}`)
                    }
                    }>
                        <div className='imageContainerCard'>
                            <img src={product.main_image} alt='' className='cardImage' />
                        </div>
                        <div className='cardDetails'>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))
                }
            </div>


        </>
    )

}

export default ShopDetails
