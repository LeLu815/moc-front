import React from 'react';
import classes from './PostPage.module.css'; // Make sure to create a Hashtag.css file for your styles

const PostPage = () => {
    // Placeholder data - replace with your actual data source
    const postDetails = {
        title: '작성된 게시글의 제목입니다.',
        author: '작성자',
        timestamp: '2023.04.23.',
        views: 15,
        comments: 10,
        tags: ['#해시태그1', '#해시태그2', '#해시태그3'],
        imageUrl: 'path_to_image.jpg', // Replace with your actual image path
    };

    // Placeholder for comments - replace with actual comments data
    const comments = [
        { id: 1, text: '댓글1' },
        { id: 2, text: '댓글2' },
        { id: 3, text: '댓글3' },
        // ... more comments
    ];

    return (
        <div className={classes.postContainer}>
            <h1>{postDetails.title}</h1>
            <div className={classes.postMeta}>
                <span>{postDetails.author}</span>
                <span>{postDetails.timestamp}</span>
                <span>조회 {postDetails.views}</span>
                <span>댓글 {postDetails.comments}</span>
            </div>
            <div className={classes.postContent}>
                {postDetails.tags.map(tag => <span key={tag}>{tag}</span>)}
                <img src={postDetails.imageUrl} alt="Post" />
            </div>
            <div className={classes.comments}>
                {comments.map(comment => (
                    <div key={comment.id} className="comment">{comment.text}</div>
                ))}
            </div>
            <div className={classes.commentForm}>
                <input type="text" placeholder="댓글을 작성하세요" />
                <button>댓글 작성</button>
            </div>
        </div>
    );
};

export default PostPage;
