import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component{
  constructor(props){
    super(props)

    this.videoRef = React.createRef();
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate(){
    this.buildPlayer();
    //since componentDidMount only loads once,
    //once we get the player to load we need to call buildPlayer again
    //to display the created player
  }

  componentWillUnmount(){
    this.player.destroy();
    //will tell player to stop attempting to stream video
  }

  buildPlayer(){
    if(this.player || !this.props.stream){
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type:'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render(){
    if(!this.props.stream){
      return <div> Loading... </div>
    }
    return (
      <div>
        <video
          ref={this.videoRef}
          style={{ width: '100%' }}
          controls={true}
        />
        <h1> {this.props.stream.title} </h1>
        <h5> {this.props.stream.description} </h5>
      </div>
    )
  }
}

  const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
  }

export default connect(mapStateToProps, { fetchStream } )(StreamShow);
