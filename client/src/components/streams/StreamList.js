import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) { //will render admin buttons on streams owned by the user (matches userId)
        if (stream.userId === this.props.currentUserId) { //currentUserId gathered from mapstatetoprops
            return (
                <div className="right floated content">
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative">Delete</button>
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
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return(
            <div>
                <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), //object.values takes out the values of an object and adds it to an array
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, {fetchStreams }) (StreamList);