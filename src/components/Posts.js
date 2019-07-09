import React from 'react';
import {Spinner} from 'react-bootstrap';

const Posts = ({ posts, loading }) => {
    if(loading){
        return <Spinner animation="border" variant="danger" />
    }

    return <ul className="list-group mb-4">
    {posts.map(post => (
        <li key={post.id} className="list-group-item">
        {post.title}
        </li>
    ))}
    </ul>;
};

export default Posts;
