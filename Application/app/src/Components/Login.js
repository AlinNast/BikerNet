const Login = () => {
    return ( 
        <>
            <form>
                <h1>Please login to continue</h1>
                <input type="username" placeholder="Username" required/>
                <input type="password" placeholder="password" required/>
                <button type="submit">Log in</button>
            </form>
        </>
     );
}
 
export default Login;