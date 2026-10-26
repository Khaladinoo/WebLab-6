import React from 'react';

function FilterForm({ filterText, onFilterChange }) {
    return (
        <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Filter Posts by Title:</label>
            <input 
                type="text" 
                value={filterText} 
                onChange={(e) => onFilterChange(e.target.value)}
                placeholder="Type to filter..."
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
        </div>
    );
}

export default FilterForm;