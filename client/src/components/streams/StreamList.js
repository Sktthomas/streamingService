import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import {Link} from 'react-router-dom'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) { //will render admin buttons on streams owned by the user (matches userId)
        if (stream.userId === this.props.currentUserId) { //currentUserId gathered from mapstatetoprops
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        } 
    }

    renderList() {
        return this.props.streams.map(stream => {
            return(
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned play icon" />
                    <div className = "content">
                        <Link to={`/streams/${stream.id}`} className="header">
                        {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreateStream() { //whether or not the create stream button should be shown
        if (this.props.isSignedIn) {
            return(
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateStream()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), //object.values takes out the values of an object and adds it to an array
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams }) (StreamList);