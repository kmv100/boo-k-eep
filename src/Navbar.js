const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>boo-k-eep</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/config">Configuration</a>
                <a href="/logout" style={{
                    color: '#fa558d'
                }}>Logout</a>
            </div>
        </nav>
     );
}
 
export default Navbar;