import React from "react";
import "./Logins.css";
function Login(){
    return (
        <div>
        <div class="divide-1">
        <div className="col-mid-1">
        <img className="image-1"src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80" alt="clubspot"></img>
        </div>
        <div className="col-mid-2">
        <h1 class="Name-2">Login</h1>
        <a href="#"class="close"><i class="fas fa-times"></i></a>
        </div>
        </div>
        <but>
        <button class="button" type="button" name="button">Sign in with google  <i class="fab fa-google"></i></button>   
    </but>
    </div>
    )
}

export default Login;