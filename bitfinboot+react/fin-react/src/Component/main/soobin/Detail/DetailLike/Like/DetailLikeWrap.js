import React from 'react';
import './DetailLikeWrap.css'

const DetailLikeWrap = ({children}) => {
    return (
        <div className="DetailLikeWrap">
            {children}
        </div>
    );
};

export default DetailLikeWrap;