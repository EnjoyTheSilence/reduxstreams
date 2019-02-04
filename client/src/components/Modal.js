import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e)=> e.stopPropagation()}
          //stops event from bubbling up and being called when we click on modal box
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
  //first argument of ReactDOM.createPortal is jsx
  //second argument is where we want to insert the jsx element
    //ex body or head or root
  //usually create some specific class in index.html where we want to insert
}

export default Modal;
