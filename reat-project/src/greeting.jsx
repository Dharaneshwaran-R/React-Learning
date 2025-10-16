function Greet(props){
    const message = <h1 className="welcome-message">
                    Hello Welcome to my React Website {props.name}
                    </h1>
    const Elsemessage = <h1 className="error-message">
                    Try Again {props.name}
                    </h1> 
    return(
        props.isLogged ? message : Elsemessage
    );            
}
export default Greet