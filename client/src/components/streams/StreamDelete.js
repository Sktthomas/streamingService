import React from 'react'
import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {

    renderActions(){
        return(//Helper function that renders the action buttons in our modal
        <React.Fragment> {/* React fragment is like an invisible element that doesn't pass html. It is not rendered in the DOM*/}
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    )
    }

    render(){
        return (
            <div>
                StreamDelete
                <Modal title="Delete Stream" content="Are you sure you want to delete this stream?" actions={this.renderActions()} onDismiss={() => history.push('/')}/>
            </div>
        )
    }
}

export default StreamDelete;