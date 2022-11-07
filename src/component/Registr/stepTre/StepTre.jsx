import React, {useCallback} from 'react';
import './StepTre.css';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";

function StepTre() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const idGenerator = useCallback(()=>{
        return Math.floor((1 + Math.random()) * 0x100000)
            .toString(16)
            .substring(1);
    })
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const setInfo = useSelector((store)=>{
        return store.registration.user;
    })

    const onSubmit = (data) => {
        if (data.passwords === data.password_repeat){
            dispatch({
                type: 'setUserPassword',
                payload: data.password
            })
            dispatch({
                type: 'setUserId',
                payload: idGenerator()
            })
            localStorage.setItem('users',JSON.stringify(setInfo));
            navigation('/login');
        }
    };
    return (
        <div>
            <form className='FormTre' onSubmit={handleSubmit(onSubmit)}>
                <p>Registration pag Step 3 enter password </p>
                <label className='Tre__Form__Lab'>Password</label>
                <input type='password'  className='Tre__Form__In'
                       {...register("passwords",
                               {required: {value: true, message:'Its required'},minLength:{value: 8,message:"Error valid"}})}
                />
                {errors.password && <span className='errMas'>{errors.password.message}</span>}
                <label className='Tre__Form__Lab'>confirm password</label>
                <input   type='password' className='Tre__Form__In'
                         {...register("password_repeat",
                             {required: {value: true, message:'Its required'},
                                 minLength:{value: 8,message:"Error valid"}
                             })}
                />
                {errors.password_repeat && <span className='errMas'>{errors.password_repeat.message}</span>}

                <button className='Tre__Form__Btn'>Next</button>
            </form>
        </div>
    );
}
export default StepTre;