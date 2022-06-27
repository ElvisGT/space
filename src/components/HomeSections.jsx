import React from 'react';

export const HomeSections = ({ children,title }) => {
    return (
        <div className="Home-sections-container">
            <h2 className="Home-category">{ title }</h2>
            <div className="Home-sections">
                {children}
            </div>
        </div>

    );
};
