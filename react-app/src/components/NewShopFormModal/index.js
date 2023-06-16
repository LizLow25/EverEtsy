import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useModal } from "../../context/Modal";
import { newShopThunk } from '../../store/shop';
import { getSingleShopThunk } from '../../store/shop';


function NewShopFormModal() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal();


    //slices of state to use for form entries
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState({});

    //to submit the form
    const handleSubmit = async (e) => {
        e.preventDefault();


        //create a FormData class to send to the backend
        const formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("shop_image", image)

        //post the data to the backend
        const newShop = await dispatch(newShopThunk(formData))

        if (newShop) {
            setName('')
            setDescription('')
            setImage('')

            await dispatch(getSingleShopThunk(newShop.id))
            history.push(`/shops/${newShop.id}`)

            closeModal()
        }




    }

    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    <input
                        type='text'
                        value={name}
                        placeholder='Name your shop'
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type='text'
                        value={description}
                        placeholder='Describe your shop'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
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
                    <button type='submit'>Create your shop</button>
                </div>

            </form>
        </div>
    );
}

export default NewShopFormModal;
