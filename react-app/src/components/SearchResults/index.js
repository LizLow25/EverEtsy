import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const SearchResults = () => {
    const history = useHistory()
    const products = useSelector(state => state.products.searchProducts)
    let productArray = Object.values(products)


    return (
        <div>
            <div className='landingbanner'>
                <h2 className='bannertext'>Discover fresh finds from creative sellers!</h2>
            </div>
            {!productArray.length? <h3 className='noresults'>Hmmm, we couldn't find that...</h3> : ''}

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

export default SearchResults;
