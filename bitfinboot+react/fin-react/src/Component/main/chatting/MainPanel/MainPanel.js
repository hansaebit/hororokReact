import React from 'react'
import MessageHeader from './MessageHeader';
import Message from './Message';
import MessageForm from './MessageForm';

function MainPanel() {
    return (
        <div style={{padding:'1.5rem 1.5rem 0 1.5rem'}}>
            <MessageHeader/>
            <div style={{
                width:'100%', height:'450px', border:'1px solid #eee', borderRadius: '4px', padding:'1rem', marginBottom:'1rem', overflowY:'auto'}}>

            </div>
            <MessageForm/>
        </div>
    )
}

export default MainPanel

