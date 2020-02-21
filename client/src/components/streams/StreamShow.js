import React from 'react'
import {connect } from 'react-redux'
import { fetchSingleStream } from '../../actions'
import flv from 'flv.js'
 
class StreamShow extends React.Component {

    constructor(props) {
        super(props);

        this.videoRef = React.createRef(); //allows us to reference something in the DOM?!
    }
    componentDidMount(){
        const {id } = this.props.match.params

        this.props.fetchSingleStream(id);

        this.player = flv.createPlayer( {
            type: 'flv',
            url: `http://localhost:800/live/${id}`
        });
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load();
    }

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }

        const {title, description} = this.props.stream

        return(
            <div>
                <video ref={this.videoRef} style={{width: '100%'}} controls={true}/>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchSingleStream}) (StreamShow);