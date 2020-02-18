import React from 'react'
import {connect } from 'react-redux'
import {fetchSingleStream} from '../../actions'

class StreamEdit extends React.Component{

    componentDidMount() {
        this.props.fetchSingleStream(this.props.match.params.id)
    }    

    render() {
        if(!this.props.stream){
            return <div>Loading stream...</div>
        }
     console.log(this.props)
     return <div>{this.props.stream.title}</div>
    }
};

const mapStateToProps = (state, ownProps) => { //ownProps is always called, even if not done so explicity
    return { stream: state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps, { fetchSingleStream }) (StreamEdit);