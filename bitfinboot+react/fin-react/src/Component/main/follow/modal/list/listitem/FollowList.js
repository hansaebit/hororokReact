import React, { Component } from 'react';

class FollowList extends Component {
    constructor(props){
        super(props);
        //console.log(this.props.mnum);
    }
    render() {
        return (
            <div className="f-list-body">
                <div className='f-list-bar'>
                    <div className='f-list-box'>
                        <div style={{marginBottom:'-45px'}} className='f-list-item'>
                            <div className='f-list-img' style={{position:'relative',top:'20px',left:'20px'}}>
                                <img style={{width:'70px',height:'70px',borderRadius:'100%'}} src={'http://localhost:9001/profilesave/'+this.props.mpic}></img>
                            </div>
                            <div style={{position:'relative',left:'120px',top:'-40px'}} className='f-list-text'>
                               <div className='f-list-id'>{this.props.memailid}</div>
                               <div style={{marginBottom:'40px'}} className='f-list-nick'>{this.props.mnick}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FollowList;