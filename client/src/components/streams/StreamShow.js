import React from 'react'
import {connect } from 'react-redux'
import { fetchSingleStream } from '../../actions'
import flv from 'flv.js' //Reaches out to grab our stream, then converts it to something our html player can play
 
class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef(); //allows us to reference/access something in the DOM?!
    }
    componentDidMount(){
        const {id } = this.props.match.params

        this.props.fetchSingleStream(id);

        this.buildPlayer();
    }

    buildPlayer() {
        if(this.player || !this.props.stream){
            return;
        }

        const {id } = this.props.match.params

        this.player = flv.createPlayer( {
            type: 'flv',
            url: `http://localhost:800/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current) //attaches the player to an element (by using React ref)
        this.player.load();
        //we don't automatically begin playing the stream, using this.player.play()
    }

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }

        const {title, description} = this.props.stream

        return(
            <div>
                <h1>{title}</h1>
                <video ref={this.videoRef} style={{width: '100%'}} controls={true}/>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchSingleStream}) (StreamShow);