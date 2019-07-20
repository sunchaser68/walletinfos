import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {auth: null}
        this.authFunc = this.authFunc.bind(this);
    }
    
    authFunc() {
        const authData = { data: "Auth on my site" };
        if (WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
                console.log( auth ); //displaying the result on the console
                this.setState({auth});
                /*...processing data */
            }).catch(error => {
                console.error( error ); // displaying the result on the console
                /*...processing errors */
            })
        } else {
            alert("To Auth WavesKeeper should be installed.");
        }
    }
    
    render() {
        const { auth } = this.state;
        if ( auth === null )
            return (
                <div className="container text-center">
                    <input className="btn btn-primary" type="submit" value="Authenticate" onClick={this.authFunc}/>            
                </div>
            )    
        else
            return (
                <div className="container text-center">
                    <div class="row mb-2">
                    <input className="btn btn-primary" type="submit" value="Authenticate" onClick={this.authFunc}/>
                    </div>
                    
                    <div class="row text-left">
                        <div class="col-sm-4">                        
                        Wallet: <b>{auth.address}</b>                        
                        </div>
                    </div>
                    
                </div>
            )
    }
}



const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}