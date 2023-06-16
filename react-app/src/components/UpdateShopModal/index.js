import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useModal } from "../../context/Modal";

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


        //create a FormData class to send to the backend
        const formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("shop_image", image)

        //post the data to the backend
        // const updatedShop = await dispatch(updateShopThunk(formData))

        // if (newShop) {
        //     setName('')
        //     setDescription('')
        //     setImage('')

        //     await dispatch(getSingleShopThunk(newShop.id))


        //     closeModal()
        //     history.push(`/shops/${newShop.id}`)
        // }




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

export default UpdateShopModal;
