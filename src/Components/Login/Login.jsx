import React from "react";
//import { Field, reduxForm } from "redux-from";
import { Form, Field } from 'react-final-form'
import { Input } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login } from '../redux/auth-reducer';
import {Navigate} from 'react-router-dom';
// import { createForm } from 'final-form';


const maxLength50 = maxLengthCreator(50);

const composeValidators = (...validators) => value =>
                validators.reduce((error, validator) => error || validator(value), undefined);

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field placeholder={'Enter email'} name={"email"} component={Input} 
                                validate={composeValidators(required, maxLength50)} />
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={"password"} component={Input} type={"password"}
                                validate={composeValidators(required, maxLength50)}/>
                    </div>
                    <div>
                        <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
                    </div>
                    <div>
                        <button>Log In</button>
                    </div>
                </form>
            )}
        />
    )
}


const onSubmit = (formData) => {  //!  78 видео, удалил потому что должен работать тот что в самом Login - Проверить
    console.log(formData);
    login(formData.email, formData.password, formData.rememberMe)

}

//const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm) - удалили так как нету хока теперь


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.iaAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);



// const form = createForm({
//     initialValues,
//     onSubmit, // required
//     validate
//   });


// // Subscribe to form state updates
// const unsubscribe = form.subscribe(
//     formState => {
//       // Update UI
//     },
//     { // FormSubscription: the list of values you want to be updated about
//       dirty: true,
//       valid: true,
//       values: true
//     }
// );

// // Subscribe to field state updates
// const unregisterField = form.registerField(
//     'username',
//     fieldState => {
//       // Update field UI
//       const { blur, change, focus, ...rest } = fieldState
//       // In addition to the values you subscribe to, field state also
//       // includes functions that your inputs need to update their state.
//     },
//     { // FieldSubscription: the list of values you want to be updated about
//       active: true,
//       dirty: true,
//       touched: true,
//       valid: true,
//       value: true
//     }
//   )

// // Submit
// form.submit() // only submits if all validation passes