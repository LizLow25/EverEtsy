import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAllProductsThunk } from '../../store/product'
import './LandingPage.css'
import { getAllShopsThunk } from '../../store/shop'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const LandingPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const products = useSelector(state => state.products.allProducts)

    // console.log('products', products)




    useEffect(() => {
        dispatch(getAllProductsThunk())
        dispatch(getAllShopsThunk())

    }, [dispatch])



    if (!products) return <h1>Products loading...</h1>
    let productArray = Object.values(products)

    //randomly pick home product
    const homeProducts = productArray.filter(product => product.category === "Home & Living")
    const featuredHomeProduct = homeProducts[getRandomInt(homeProducts.length)]

    //randomly pick accessory product
    const accessoryProducts = productArray.filter(product => product.category === "Jewelry & Accessories")
    const featuredAccessoryProduct = accessoryProducts[getRandomInt(accessoryProducts.length)]

    //randomly pick clothing product
    const clothingProducts = productArray.filter(product => product.category === "Clothing & Shoes")
    const featuredClothingProduct = clothingProducts[getRandomInt(clothingProducts.length)]

    //randomly pick art product
    const artProducts = productArray.filter(product => product.category === "Art & Collectibles")
    const featuredArtProduct = artProducts[getRandomInt(artProducts.length)]

    return (
        <div>
            <div className='landingbanner'>
                <h2 className='bannertext'>Discover fresh finds from creative sellers!</h2>
            </div>
            <div className='categorydisplay'>
                <NavLink className='landingnav' to={`/products/${featuredHomeProduct?.id}`}><div className='circleprod'>
                    <img src={featuredHomeProduct?.main_image} alt='' className='landingimage' />
                    Home & Living
                </div></NavLink>
                <NavLink className='landingnav' to={`/products/${featuredAccessoryProduct?.id}`}><div className='circleprod'>
                    <img src={featuredAccessoryProduct?.main_image} alt='' className='landingimage' />
                    Jewelry & Accessories</div></NavLink>
                <NavLink className='landingnav' to={`/products/${featuredClothingProduct?.id}`}><div className='circleprod'>
                    <img src={featuredClothingProduct?.main_image} alt='' className='landingimage' />
                    Clothing & Shoes</div></NavLink>
                <NavLink className='landingnav' to={`/products/${featuredArtProduct?.id}`}><div className='circleprod'>
                    <img src={featuredArtProduct?.main_image} alt='' className='landingimage' />
                    Art & Collectibles</div></NavLink>


            </div>
            <div className='productCardContainer' >
                {productArray?.map(product => (
                    <div key={product.id} className='productCard' onClick={(e) => {
                        history.push(`/products/${product.id}`)
                    }
                    }>
                        <div className='imageContainerCard'>
                            <img src={product.main_image} alt='' className='cardImage' />
                        </div>
                        <div className='cardDetails'>
                            <div className='productPrice'>${product.price.toFixed(2)}</div>
                            {/* <p>{product.name}</p> */}

                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )


}

export default LandingPage;
