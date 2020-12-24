import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from  './Payments';
class Header extends Component{
    renderContent(){
        switch (this.props.auth){
            case null:
                return 'Still deciding';
            case false :
                return(<li><a href="/auth/google">Login with Google</a></li>);
            default:
                return[
                <li key="1"><Payments/></li>,
                <li key="3" style={{margin: '0 10px'}}>
                    Credits: {this.props.auth.credits}
                </li>,
                <li key ="2"><a href="/api/logout">logout</a></li>
            ];
            
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper" style={{paddingLeft:40}}>
                <Link 
                    to={this.props.auth ? '/surveys' :'/'} 
                    className="brand-logo"
                    >
                    Emaily
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down"  style={{paddingRight:40}}>
                   {this.renderContent()}
                </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps({ auth }){
    return { auth };
}
export default connect(mapStateToProps) (Header);