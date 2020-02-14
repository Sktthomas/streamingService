import React from 'react'
import {Field, reduxForm} from 'redux-form'; //Field is a react component, so it needs to be capitalized. reduxForm is a function, so it is in camelCase

class StreamCreate  extends React.Component {

    renderError({ error, touched }){ //destructured parameters
        if(touched && error) {//if the input field has been touched and there is an error...
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => { //Helper function that helps render the input in the form
        const className = `field ${meta.error && meta.touched ? 'error' : ''}` //this function appends error to the classname if there are errors in a touched input field
        return( 
            <div className={className}>
                <label>{label}</label>
                <input {...input /*Takes all the properties of the formPRops.input object and adds them to the input field*/} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
            )
    }

    onSubmit(formValues) { //we receive the values of the form directly from the redux form as an object
        console.log(formValues)
    }

    render(){
        return(
          <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field name="title" component={this.renderInput} label="Enter Title"/>
              <Field name="description" component={this.renderInput} label="Enter Description"/>
              <button className="ui button primary">Submit</button>
          </form>
    )
    }
}

const validate = (formValues) => {
    const errors = {}; //This object is passed back empty if there are no errors

    if (!formValues.title) {
        //This is only run when user does not enter in a title
        errors.title = 'You must enter a title'
    }

    if(!formValues.description) {
        //This is only run when user does not enter in a description
        errors.description = 'You must enter a description'
    }
    return errors;
    
}

export default reduxForm({
    form: 'streamCreate', 
    validate: validate}) (StreamCreate); //reduxForm returns a function, which is immediately called with StreamCreate