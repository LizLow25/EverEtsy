import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useModal } from "../../context/Modal";
import { createReviewThunk } from '../../store/review';
import './CreateReviewModal.css'

function CreateReviewModal({ spotId }) {
    const { closeModal } = useModal();
    const dispatch = useDispatch();

    const [review, setReview] = useState('');
    //items
    const [itemRating, setItemRating] = useState(0)
    const [itemStars, setItemStars] = useState(['empty', 'empty', 'empty', 'empty', 'empty']);
    //shipping
    const [shipRating, setShipRating] = useState(0)
    const [shipStars, setShipStars] = useState(['empty', 'empty', 'empty', 'empty', 'empty']);
    //service
    const [serviceRating, setServiceRating] = useState(0)
    const [serviceStars, setServiceStars] = useState(['empty', 'empty', 'empty', 'empty', 'empty']);

    //items
    const mouseItem = (num) => {
        let starSettings = ['empty', 'empty', 'empty', 'empty', 'empty']
        for (let i = 0; i < num; i++) {
            starSettings[i] = 'filled'
            setItemStars(starSettings)
        }
    }
    const onItemChange = (number) => {
        setItemRating(parseInt(number));
    };

    //shipping
    const mouseShip = (num) => {
        let starSettings = ['empty', 'empty', 'empty', 'empty', 'empty']
        for (let i = 0; i < num; i++) {
            starSettings[i] = 'filled'
            setShipStars(starSettings)
        }
    }
    const onShipChange = (number) => {
        setShipRating(parseInt(number));
    };

    //service

    const mouseService = (num) => {
        let starSettings = ['empty', 'empty', 'empty', 'empty', 'empty']
        for (let i = 0; i < num; i++) {
            starSettings[i] = 'filled'
            setServiceStars(starSettings)
        }
    }
    const onServiceChange = (number) => {
        setServiceRating(parseInt(number));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            content: review,
            itemRating,
            shipRating,
            serviceRating

        }

        console.log('newreview', newReview)

        await dispatch(createReviewThunk(newReview))


        return closeModal()



    };






    return (
        <div className="reviewmodal">
            <h1>Let us know what you think!</h1>
            <form className='reviewformmodal' onSubmit={handleSubmit}>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    name="body"
                    placeholder="Leave your review here..."
                    rows="8"
                ></textarea>
                <div className="rating-input">


                    <p>Item Quality</p>
                    <div className={itemStars[0]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseItem(1)}
                            onClick={() => onItemChange(1)}
                        ></i>
                    </div>
                    <div className={itemStars[1]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseItem(2)}
                            onClick={() => onItemChange(2)}
                        ></i>
                    </div>
                    <div className={itemStars[2]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseItem(3)}
                            onClick={() => onItemChange(3)}
                        ></i>
                    </div>
                    <div className={itemStars[3]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseItem(4)}
                            onClick={() => onItemChange(4)}
                        ></i>
                    </div>
                    <div className={itemStars[4]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseItem(5)}
                            onClick={() => onItemChange(5)}
                        ></i>
                    </div>

                </div>

                <div className="rating-input">
                    <p>Shipping</p>
                    <div className={shipStars[0]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseShip(1)}
                            onClick={() => onShipChange(1)}
                        ></i>
                    </div>
                    <div className={shipStars[1]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseShip(2)}
                            onClick={() => onShipChange(2)}
                        ></i>
                    </div>
                    <div className={shipStars[2]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseShip(3)}
                            onClick={() => onShipChange(3)}
                        ></i>
                    </div>
                    <div className={shipStars[3]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseShip(4)}
                            onClick={() => onShipChange(4)}
                        ></i>
                    </div>
                    <div className={shipStars[4]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseShip(5)}
                            onClick={() => onShipChange(5)}
                        ></i>
                    </div>

                </div>

                <div className="rating-input">
                    <p>Customer Service</p>
                    <div className={serviceStars[0]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseService(1)}
                            onClick={() => onServiceChange(1)}
                        ></i>
                    </div>
                    <div className={serviceStars[1]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseService(2)}
                            onClick={() => onServiceChange(2)}
                        ></i>
                    </div>
                    <div className={serviceStars[2]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseService(3)}
                            onClick={() => onServiceChange(3)}
                        ></i>
                    </div>
                    <div className={serviceStars[3]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseService(4)}
                            onClick={() => onServiceChange(4)}
                        ></i>
                    </div>
                    <div className={serviceStars[4]} >
                        <i
                            className="fa-regular fa-star"
                            onMouseEnter={() => mouseService(5)}
                            onClick={() => onServiceChange(5)}
                        ></i>
                    </div>

                </div>
                <button
                    className='submitreviewbutton'
                    type="submit"

                >Submit Your Review</button>
            </form>


        </div>
    )

}

export default CreateReviewModal;
