import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream , editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render(){
    if(!this.props.stream){
      return <div> Loading... </div>;
    }

    return(
      <div>
        <h3> Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
    //using lodash pick to pick specific object props we want to use from stream
    //same as doing {{title: this.props.stream.title description: this.props.stream.description}}
  }
}


const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream , editStream })(StreamEdit);
