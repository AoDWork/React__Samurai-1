import React from "react";
//import { Field, reduxForm } from "redux-form";
import { Form, Field } from 'react-final-form';
import { Input } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login } from '../redux/auth-reducer';
import {Navigate} from 'react-router-dom';
import styles from "../common/FormControls/FormControls.module.css"


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
                    { props.error && <div className={styles.summaryError}>
                        {props.error}
                    </div>}
                    <div>
                        <button>Log In</button>
                    </div>
                </form>
            )}
        />
    )
}


const onSubmit = (formData) => {    //!  без этого ошибка что onSubmit - не объявлен, а props в него не проходят поэтому props.login 
    console.log(formData);          //! не запустить

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


