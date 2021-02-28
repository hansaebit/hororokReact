import React from 'react';
import './DetailPictureWrap.css';

const DetailPictureWrap = ({children}) => {
    return (
        <div className="DetailPictureWrap">
            {children}
        </div>
    );
};

export default DetailPictureWrap;