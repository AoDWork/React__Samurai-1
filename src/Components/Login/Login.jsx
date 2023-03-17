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



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}


const LoginTest = () => (
    <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
                <div>
                    <label>Employed</label>
                    <Field name="employed" component="input" type="checkbox" />
                </div>
                <div>
                    <label>Favorite Color</label>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="#ff0000">❤️ Red</option>
                        <option value="#00ff00">💚 Green</option>
                        <option value="#0000ff">💙 Blue</option>
                    </Field>
                </div>
                <div>
                    <label>Toppings</label>
                    <Field name="toppings" component="select" multiple>
                        <option value="chicken">🐓 Chicken</option>
                        <option value="ham">🐷 Ham</option>
                        <option value="mushrooms">🍄 Mushrooms</option>
                        <option value="cheese">🧀 Cheese</option>
                        <option value="tuna">🐟 Tuna</option>
                        <option value="pineapple">🍍 Pineapple</option>
                    </Field>
                </div>
                <div>
                    <label>Sauces</label>
                    <div>
                        <label>
                            <Field
                                name="sauces"
                                component="input"
                                type="checkbox"
                                value="ketchup"
                            />{' '}
                            Ketchup
                        </label>
                        <label>
                            <Field
                                name="sauces"
                                component="input"
                                type="checkbox"
                                value="mustard"
                            />{' '}
                            Mustard
                        </label>
                        <label>
                            <Field
                                name="sauces"
                                component="input"
                                type="checkbox"
                                value="mayonnaise"
                            />{' '}
                            Mayonnaise
                        </label>
                        <label>
                            <Field
                                name="sauces"
                                component="input"
                                type="checkbox"
                                value="guacamole"
                            />{' '}
                            Guacamole 🥑
                        </label>
                    </div>
                </div>
                <div>
                    <label>Best Stooge</label>
                    <div>
                        <label>
                            <Field
                                name="stooge"
                                component="input"
                                type="radio"
                                value="larry"
                            />{' '}
                            Larry
                        </label>
                        <label>
                            <Field
                                name="stooge"
                                component="input"
                                type="radio"
                                value="moe"
                            />{' '}
                            Moe
                        </label>
                        <label>
                            <Field
                                name="stooge"
                                component="input"
                                type="radio"
                                value="curly"
                            />{' '}
                            Curly
                        </label>
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <Field name="notes" component="textarea" placeholder="Notes" />
                </div>
                <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >
                        Reset
                    </button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
        )}
    />
)


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