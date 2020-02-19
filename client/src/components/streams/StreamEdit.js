import React from 'react'
import {connect } from 'react-redux'
import {fetchSingleStream, editStream} from '../../actions'
import StreamForm from './StreamForm'
import _ from 'lodash'

class StreamEdit extends React.Component{

    componentDidMount() {
        this.props.fetchSingleStream(this.props.match.params.id)
    }
    
    onSubmit = (formvalues) => {
        this.props.editStream(this.props.match.params.id, formvalues);
    }

    render() {
        if(!this.props.stream){
            return <div>Loading stream...</div>
        }
     console.log(this.props)
     return (
         <div>
             <h3>Edit A Stream</h3>
             <StreamForm initialValues = {_.pick(this.props.stream, 'title', 'description')} //Since the fields in the edit form is named as title and description, Redux Forms knows to input these values into the fields. These values are contained within the stream prop and picked out by using lodash
              onSubmit= {this.onSubmit}/>
         </div>
     )
    }
};

const mapStateToProps = (state, ownProps) => { //ownProps is always called, even if not done so explicity
    return { stream: state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps, { fetchSingleStream, editStream }) (StreamEdit);