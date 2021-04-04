import React from 'react';

const Sidebar = ({ allPostsData }) => {
    return (
        <div className="sidebar">
            <h2>Recent</h2>
            <ul>
               {allPostsData.map(({ id, title }) => (
                    <li key={id}>
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;