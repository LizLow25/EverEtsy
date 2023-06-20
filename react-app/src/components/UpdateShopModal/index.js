import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useModal } from "../../context/Modal";
import { updateShopThunk } from '../../store/shop';
import { getSingleShopThunk } from '../../store/shop';
import './UpdateShopModal.css'

function UpdateShopModal({ singleShop }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();
    console.log(singleShop)


    //slices of state to prefill form entries
    const [name, setName] = useState(singleShop?.name || '');
    const [description, setDescription] = useState(singleShop?.description || '');
    const [image, setImage] = useState(singleShop?.shop_image || '');
    const [errors, setErrors] = useState({});

    //to submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        setErrors(newErrors)
        // validate data on the frontend here
        if (name.length < 3 || name.length > 50) newErrors['name'] = "Shop name must be between 3 and 50 characters"
        if (description.length < 5 || description.length > 100) newErrors['description'] = "Shop description must be between 5 and 100 characters"


        setErrors(newErrors);

        // If we have errors, bail out
        if (Object.keys(newErrors).length) return;


        //create a FormData class to send to the backend
        const formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("shop_image", image)


        //post the data to the backend
        const updatedShop = await dispatch(updateShopThunk(singleShop.id, formData))

        if (updatedShop) {
            setName('')
            setDescription('')
            setImage('')

            await dispatch(getSingleShopThunk(updatedShop.id))


            closeModal()

        }




    }

    return (
        <div className='update-shop-modal'>
            <form  className='update-shop-form' onSubmit={handleSubmit} encType="multipart/form-data">
                <h3>Shop preferences</h3>
                <label>
                    <p>Would you like to update your shop name?</p>
                    <span className='errors'>{errors.name}</span>
                    <input
                        type='text'
                        value={name}
                        placeholder='Name your shop'
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                <p>Would you like to update your shop description?</p>
                    <span className='errors'>{errors.description}</span>
                    <input
                        type='text'
                        value={description}
                        placeholder='Describe your shop'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                <p>Would you like to update your shop image?</p>
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
                <div >
                    <button className='updatebutton' type='submit'>Update your shop</button>
                </div>

            </form>
        </div>
    );
}

export default UpdateShopModal;
