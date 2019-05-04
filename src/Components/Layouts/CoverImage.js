import React,{Component} from 'react';
import Header from './Header';
import logo from '../../images/logo.png'
import stamp from '../../images/stamp.png';
import SideNavigator from './SideNavigator';

class CoverImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            sideNavStatus: false,
        };
        this.toggleSideNav = this.toggleSideNav.bind(this);
    }

    toggleSideNav(){
        const currentStatus = this.state.sideNavStatus;
        this.setState({ sideNavStatus: !currentStatus });
    };
    
    render(){
        const {handlePageChange} = this.props;
        const {sideNavStatus} = this.state;
        return (
            <div>
                 <nav className="navbar navbar-default bootsnav no-background navbar-fixed black">
                    <div className="container">  
                        <div className="attr-nav">
                            <ul>
                                <li className="side-menu">
                                    <a href="#" onClick={this.toggleSideNav}>
                                        <i className="fa fa-bars"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>        
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img src={logo} className="logo" alt="" />
                            </a>
                        </div>
                    </div>
                    <SideNavigator 
                        status={!sideNavStatus ? 'side' : 'side on'}
                     />
                 </nav>
                 <Header
                    title={'fatty'}
                    imgUrl={stamp}
                    handlePageChange={handlePageChange}
                 >
                 FATTY BURGER
                 </Header>
            </div>
        );
    }
    
};

export default CoverImage;