import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount(){ //when the GoogleAuth component mounts, the api will be initialized
        window.gapi.load('client:auth2', () => { //loads up the OAuth from the api and , then calls a callback function
            window.gapi.client.init({
                clientId: '50373557609-n219s269laqn2nsegckapea9mjutvu10.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });

        }); 

    }

    onAuthChange = () => { //callback function that is called each time the isSignedIn.listen value changes
        this.setState ({isSignedIn: this.auth.isSignedIn.get() });
    }

    OnSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    authButtonRender(){
        if ( this.state.isSignedIn === null){
            return null
        } else if (this.state.isSignedIn) {
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

export default GoogleAuth