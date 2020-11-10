import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../common/Preloader/FormsControls/FormControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} placeholder={'123'} name={'newPostText'} validate ={[required, maxLength10 ]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} like={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.posts}>
      <div className={s.content}>
        <AddNewPostReduxForm onSubmit={ onAddPost } />
      </div>
      <div>
        {postsElements}
      </div>

    </div>
  )
}

export default MyPosts;