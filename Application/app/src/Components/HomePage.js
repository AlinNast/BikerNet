const HomePage = () => {
    return ( 
        <>
            <main className="register">
                <form>
                    <h1>Please login to continue</h1>
                    <input type="username" placeholder="Username" required />
                    <input type="password" placeholder="password" required />
                    <button type="submit">Log in</button>
                </form>

                <form>
                    <h1>Not registered yet? Sing up for free</h1>
                    <input type="username" placeholder="Username" required />
                    <input type="email" placeholder="email" required />
                    <input type="password" placeholder="password" required />
                    <button type="submit">Log in</button>
                </form>
            </main>
        </>
     );
}
 
export default HomePage;