function Signup({onSignup, updateSignupFormData}){
    return (
        <form onSubmit={onSignup}>
            <h1>Sign Up:</h1>
            <label>Username: </label>
            <input type="text" name="username" onChange={updateSignupFormData}/><br/>
            <input type="submit"/>
        </form>
    )
}

export default Signup;