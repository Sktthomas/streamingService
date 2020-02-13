import React from 'react';
import {connect } from 'react-redux';
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount(){ //when the GoogleAuth component mounts, the api will be initialized
        window.gapi.load('client:auth2', () => { //loads up the OAuth from the api and , then calls a callback function
            window.gapi.client.init({
                clientId: '50373557609-n219s269laqn2nsegckapea9mjutvu10.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });

        }); 

    }

    onAuthChange = (isSignedIn) => { //callback function that is called each time the isSignedIn.listen value changes
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }else {
            this.props.signOut()
        }
    };

    OnSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    authButtonRender(){
        if ( this.props.isSignedIn === null){
            return null
        } else if (this.props.isSignedIn) {
            return(
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui blue google button" onClick={this.OnSignInClick}>
                    <i className="google icon" />
                    Sign in with Google
                </button>
            )
        }
    }

    render() {
    return <div>{this.authButtonRender()}</div>
    }
}


const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}
export default connect(mapStateToProps,
    {signIn, signOut}
 ) (GoogleAuth)