import React from 'react';
import UserPanel from './UserPanel';
import DirectMessage from './DirectMessage';

function SidePanel() {
    return (
        <div style={{padding:'2rem', minHeight:'100vh', minWidth:'275px',borderRight:'1px solid #eee'}}>
            <UserPanel/>
            <DirectMessage/>
        </div>
    )
}

export default SidePanel
