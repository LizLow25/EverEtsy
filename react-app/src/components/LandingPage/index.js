import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAllProductsThunk } from '../../store/product'
import './LandingPage.css'


const LandingPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const products = useSelector(state => state.products.allProducts)
    console.log('products', products)


    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [dispatch])

    if (!products) return <h1>Products loading...</h1>
    let productArray = Object.values(products)
    return (
        <div className='productCardContainer' >
            {productArray?.map(product => (
                <div key={product.id} className='productCard' onClick={(e) => {
                    history.push(`/products/${product.id}`) }
                }>
                    <div className='imageContainerCard'>
                        <img src={product.main_image} alt='' className='cardImage'/>
                    </div>
                    <div className='cardDetails'>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )


}

export default LandingPage;
