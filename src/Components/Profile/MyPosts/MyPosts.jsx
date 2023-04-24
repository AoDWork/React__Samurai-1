import React from "react";
import { memo } from "react";  //! - вроде как импорт не требуется
import style from './MyPosts.module.css'
import Post from './Post/Post'
import { Form, Field } from 'react-final-form'
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";


let onAddPost = (values) => {
  //alert(values.newPostText);
  props.addPost(values.newPostText);
}

const maxLength10 = maxLengthCreator(10);

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const AddNewPostForm = (props) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="newPostText" placeholder='Type Msg' component={Textarea} validate={composeValidators(required, maxLength10)} />
          </div>
          <div>
            <div><button>Add Post</button></div>
          </div>
        </form>
      )}
    />
  )
}



const MyPosts = React.memo(props => {   
                                  
    let postsElements = 
        props.postsData.map((el, ind) => <Post msg={el.post} likesCount={el.likesCount} key={el.id} />);



    return (
      <div className={style.form__newPost}>
        <div className={style.newPost__title}>New Post
        <AddNewPostForm onSubmit={onAddPost}/>
          {/* <textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText} />
          <button onClick={ onAddPost }>Add Post</button> */}
        </div>
        {postsElements}
      </div>
    );
  });


export default MyPosts;





// class MyPosts extends PureComponent {    //! 87 - закоментил чтобы изменить на классовый компонент

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextProps != this.props || nextState != this.state;
//   // }

//   render() {

//     let postsElements =
//       props.postsData.map((el, ind) => <Post msg={el.post} likesCount={el.likesCount} key={ind} />);

//     let onAddPost = (values) => {
//       //alert(values.newPostText);
//       props.addPost(values.newPostText);
//     }

//     const maxLength10 = maxLengthCreator(10);

//     const composeValidators = (...validators) => value =>
//       validators.reduce((error, validator) => error || validator(value), undefined);

//     const AddNewPostForm = (props) => {
//       return (
//         <Form
//           onSubmit={onSubmit}
//           render={({ handleSubmit, form, submitting, pristine, values }) => (
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <Field name="newPostText" placeholder='Type Msg' component={Textarea} validate={composeValidators(required, maxLength10)} />
//               </div>
//               <div>
//                 <div><button>Add Post</button></div>
//               </div>
//             </form>
//           )}
//         />
//       )
//     }


//     return (
//       <div className={style.form__newPost}>
//         <div className={style.newPost__title}>New Post
//           <AddNewPostForm onSubmit={onAddPost} />
//           {/* <textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText} />
//         <button onClick={ onAddPost }>Add Post</button> */}
//         </div>
//         {postsElements}
//       </div>
//     );
//   }
// }