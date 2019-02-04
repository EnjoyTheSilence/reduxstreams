import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={()=>history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e)=> e.stopPropagation()}
          //stops event from bubbling up and being called when we click on modal box
        className="ui standard modal visible active"
      >
        <div className="header">
          {props.title}
        </div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui primary button">
            Delete
          </button>
          <button className="ui button" >
            Cancel
          </button>
        </div>
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
