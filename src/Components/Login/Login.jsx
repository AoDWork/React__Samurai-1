import React from "react";
//import { Field, reduxForm } from "redux-from";
import { Form, Field } from 'react-final-form'
// import { createForm } from 'final-form';


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


const LoginForm = (props) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field placeholder={'Login'} name={"login"} component={'input'} />
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={"password"} component={'input'} />
                    </div>
                    <div>
                        <Field type={"checkbox"} name={"rememberMe"} component={'input'} /> remember me
                    </div>
                    <div>
                        <button>Log In</button>
                    </div>
                </form>
            )}
        />
    )
}

const onSubmit = (formData) => {
    console.log(formData);
}

//const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm) - удалили так как нету хока теперь


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
}


export default Login;