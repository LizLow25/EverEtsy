import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useModal } from "../../context/Modal";


function CreateProductModal({ shop }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();



    //slices of state to use for form entries
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [errors, setErrors] = useState({});

    //to submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        // const newErrors = {};
        // setErrors(newErrors)
        // // validate data on the frontend here
        // if (name.length < 3 || name.length > 50) newErrors['name'] = "Shop name must be between 3 and 50 characters"
        // if (description.length < 5 || description.length > 100) newErrors['description'] = "Shop description must be between 5 and 100 characters"
        // if (!image) newErrors['image'] = "Please upload an image for your shop"


        // setErrors(newErrors);

        // // If we have errors, bail out
        // if (Object.keys(newErrors).length) return;


        //create a FormData class to send to the backend
        const formData = new FormData()
        formData.append("name", name)
        formData.append("shop_id", shop.id)
        formData.append("details", details)
        formData.append("price", price)
        formData.append("main_image", image)
        formData.append("category", category)

        //post the data to the backend
        //const newProduct = await dispatch(newProductThunk(formData))

        // if (newShop) {
        //     setName('')
        //     setDescription('')
        //     setImage('')

        //     //await dispatch(getSingleShopThunk(newShop.id))


        //     closeModal()
        //     history.push('/shops/manage')
        // }




    }

    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    <span className='errors'>{errors.name}</span>
                    <input
                        type='text'
                        value={name}
                        placeholder='Name your product'
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <span className='errors'>{errors.details}</span>
                    <input
                        type='text'
                        value={details}
                        placeholder='Describe your product'
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </label>
                <label>
                    <span className='errors'>{errors.price}</span>
                    <div className='dollar-sign-div'>
                        <span className='just-the-dollar-sign'>$</span>
                        <input
                            type='number'
                            value={price}
                            placeholder='Price'
                            onChange={(e) => setPrice(e.target.value)}
                            className='dollar-input'
                        />
                    </div>
                </label>
                <label>
                    <span className='errors'>{errors.image}</span>
                    <input
                        type='file'
                        accept='image/*'
                        placeholder='Store Image'
                        onChange={(e) => {
                            console.log("e.target.files", e.target.files)
                            setImage(e.target.files[0])
                        }}
                    />
                </label>
                <label>
                    Category <span className='errors'>{errors.category}</span>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option default>Select a Category</option>
                        <option value={'Home & Living'}>Home & Living</option>
                        <option value={'Clothing & Shoes'}>Clothing & Shoes</option>
                        <option value={'Jewelry & Accessories'}>Jewelry & Accessories</option>
                        <option value={'Art & Collectibles'}>Art & Collectibles</option>
                    </select>
                </label>
                <div >
                    <button type='submit'>Post your product</button>
                </div>

            </form>
        </div>
    );

}

export default CreateProductModal;
