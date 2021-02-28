import React, { Component } from 'react';

const FollowBtnItem  = ({onClick, postId, disabled}) => (
            <div style={{width:'100%',height:'100%'}}>
                <div style={{display:'flex',margin:' 0 auto'}}>
                    <div style={{marginLeft:'80px'}}>
                        <input style={{border:'none',fontSize:'25px'}} type='button' value="팔로워"></input>
                    </div>
                    <div style={{marginLeft:'80px'}}>
                        <input style={{border:'none',fontSize:'25px'}} type='button' value="팔로잉"></input>
                    </div>
                </div>
            </div>
);
export default FollowBtnItem;