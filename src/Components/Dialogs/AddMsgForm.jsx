import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';


const maxLength100 = maxLengthCreator(100);


const AddMsgForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Type Msg'
                    name="newMsgBody"
                    component={Textarea}
                    validate={[required, maxLength100]} />
            </div>
            <div>
                <div><button>Send</button></div>
            </div>
        </form>
    )
}


export default reduxForm({ form: 'dialog-add-message-form' })(AddMsgForm);