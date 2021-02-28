import React from 'react';
import './DetailCommentWrap.css'

const DetailCommentWrap = ({children}) => {
    return (
        <div className="DetailCommentWrap">
            {children}
        </div>
    );
};

export default DetailCommentWrap;