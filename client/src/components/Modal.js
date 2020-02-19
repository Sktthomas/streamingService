import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = props => {
return ReactDOM.createPortal( //This creates a portal that bypasses parent components to create a component almost at root level
    <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
        <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
            <div className="header">{props.title}</div>
            <div className="content">Are you sure you want to delete the stream?</div>
            <div className="actions">
                {props.actions}
            </div>
            </div>
    </div>,
    document.querySelector('#modal')
);
}

export default Modal;
