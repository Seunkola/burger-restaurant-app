import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

let status='side on';

class SideNavigator extends Component {
    constructor(props){
        super(props);
        this.closeNav = this.closeNav.bind(this);
    }

    closeNav() {
        status = 'side';
    };

    render(){
        status = this.props.status;
        return (
            <div className={status}>
                 <a 
                    href="#" 
                    className="close-side"
                    onClick={this.closeNav()}>
                    <i className="fa fa-times"></i>
                </a>
                 <div className="wideget">
                    <h6 className="title">Menu</h6>
                    <ul id="menu" className="link">
                        <li>
                            <Link to={{
                                pathname: '/mealdetails',
                                mealDetails: {
                                    name: 'Shack Burger'
                                }
                            }}>
                                Shack Burger
                            </Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: '/mealdetails',
                                mealDetails: {
                                    name: 'Signature Burger'
                                }
                        }}>
                                Signature Burger
                            </Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: '/mealdetails',
                                mealDetails: {
                                    name: 'Classic Burger'
                                }
                        }}>
                                Classic Burger
                            </Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: '/mealdetails',
                                mealDetails: {
                                    name: 'Original Burger'
                                }
                        }}>
                                Original Burger
                            </Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: '/mealdetails',
                                mealDetails: {
                                    name: 'Cheddar Chunky'
                                }
                        }}>
                                Cheddar Chunky
                            </Link>
                        </li>
                        <li id="close-buttom"><Link to="/"><h5>Return to Home page</h5></Link></li>
                    </ul>
                 </div>
            </div>
        );
    }
}

export default withRouter(SideNavigator);