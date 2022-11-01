import React from 'react';
import style from '../Profile.module.css';

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        }) 
    }
    
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={}>{this.activateEditMode}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
            
        );
    }
}

export default ProfileStatus;