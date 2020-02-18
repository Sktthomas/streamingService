import React from 'react'
import {connect} from 'react-redux';
import {createStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate  extends React.Component {

    onSubmit = (formValues) => { //we receive the values of the form directly from the redux form as an object
        this.props.createStream(formValues); //when the user submits a valid form, this is called and the create stream is dispatched
    }

    render(){
        return(
          <div>
              <h3>Create a stream</h3>
              <StreamForm onSubmit={this.onSubmit} />
          </div>
    )
    }
}

export default connect(null, {createStream}) (StreamCreate);