import React from 'react'
import {BsPencilSquare} from 'react-icons/bs';
import store from "../../../../redux/store";

function UserPanel() {
    return (
        <div>
            <h3>
                 Direct <BsPencilSquare style={{float:'right', marginRight:'10px'}}/>{" "}
            </h3>
            <h5>{store.getState().loginId}</h5>
        </div>
    )
}

export default UserPanel
