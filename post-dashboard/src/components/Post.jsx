import React from "react";

function post({title, body}){
    return(
            <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            {/* Post Title */}
            <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50', textTransform: 'capitalize' }}>
                {title}
            </h3>
            
            {/* Post Body Content */}
            <p style={{ margin: 0, color: '#555555', lineHeight: '1.5' }}>
                {body}
            </p>
        </div>
    );
}