import React from 'react';

function Post({ post }) {
    return (
        <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            marginBottom: '10px', 
            borderRadius: '6px',
            backgroundColor: '#ffffff',
            color: '#333333'
        }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#111' }}>{post.title}</h3>
            <p style={{ margin: 0, color: '#555' }}>{post.body}</p>
        </div>
    );
}

export default Post;