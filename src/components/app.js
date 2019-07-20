import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {publicState: null}
        this.publicStateFunc = this.publicStateFunc.bind(this);
    }
    
    publicStateFunc() {
        const publicStateData = { data: "publicState on my site" };
        if (WavesKeeper) {
            WavesKeeper.publicState( publicStateData )
            .then(publicState => {
                console.log( publicState ); //displaying the result on the console
                this.setState({publicState});
                /*...processing data */
            }).catch(error => {
                console.error( error ); // displaying the result on the console
                /*...processing errors */
            })
        } else {
            alert("Error: WavesKeeper should be installed.");
        }
    }
    
    render() {
        const { publicState } = this.state;
        if ( publicState === null )
            return (
                <div className="container text-center">
                    <input className="btn btn-primary" type="submit" value="View Info" onClick={this.publicStateFunc}/>            
                </div>
            )    
        else            
            return (
                <div className="container text-center">
                    <div class="row mb-2">
                    <input className="btn btn-primary" type="submit" value="View Info" onClick={this.publicStateFunc}/>
                    </div>
                    
                    <div class="row text-left">
                        <div class="col-sm-4">                        
                        Network: <b>{publicState.account.address}</b><br/>
                        Wallet: <b>{publicState.account.network}</b><br/>
                        Balance: <b>{publicState.account.balance.available}</b><br/>                        
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