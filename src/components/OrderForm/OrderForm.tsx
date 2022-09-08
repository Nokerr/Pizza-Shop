import React from 'react';
import './OrderForm.scss'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hook';
import { cleareItemList } from '../../redux/cart/cartSlice.';
import { setisconfirmMassageOpen } from '../../redux/confirmMassage/confirmMassageSlice';

const OrderForm: React.FC = () => {

    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            phone: "",
            name: ""
        }
    });


    return (

        <>

            <form
                onSubmit={handleSubmit((data: any) => {
                    dispatch(cleareItemList())
                    dispatch(dispatch(setisconfirmMassageOpen(true)))
                    // alert(JSON.stringify(data));
                })}>
                <div className="input">
                    <div className="input__phone">
                        <label>Phone</label>
                        <input type='number' {...register("phone", { required: true })} placeholder='+380 00 000 00 00' />
                        {errors.phone && <p>Enter your Phone</p>}
                    </div>
                    <div className="input__name">
                        <label>Name</label>
                        <input
                            {...register("name", { required: true, minLength: 2 })}
                            placeholder='Your name'
                        />
                        {errors.name && <p>Enter your name</p>}
                    </div>
                </div>

                <div className="cart__bottom-buttons">
                    <Link to='/' className="go-back_button">Go back</Link>
                    <input className="checkout_button" type="submit" value='Checkout' />
                </div>
            </form>
        </>
    );
}

export default OrderForm;


