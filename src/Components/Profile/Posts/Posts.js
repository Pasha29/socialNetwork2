import React from 'react';
import css from './Posts.module.css';
import NewPostBlock from './NewPostBlock/NewPostBlock';
import postImg from './../../../Materials/postImg.png';

const Posts = ((props) => {
    console.log('render');
    return (
        <div>
            <NewPostBlock addPost={props.addPost} />
            
            <div className={css.postsBlock}>
                {props.postMessages.map( item => 
                    <div key={item.id} className={css.postBlock}>
                    <div className={css.postBlockImg}>
                        <img src={postImg} alt=""/>
                    </div>
        
                    <div className={css.postText}><p>{item.textPost}</p></div>
                </div> )}
            </div>
        </div>
    );
})

export default Posts;