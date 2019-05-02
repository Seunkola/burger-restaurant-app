import React, {Component} from 'react';
import CoverImage from './CoverImage';
import Menu from './Menu';
import {imagesLoaded} from '../../constants/ImagesLoaded';
import Splash from './Splash';
import {BottomTabs} from './BottomTabs';
import {Tagline} from './Tagline';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageLoading : true
        };
        this.renderSplash = this.renderSplash.bind(this);
        this.timer = setTimeout(this.renderSplash,1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handlePageChange = () => {
        this.setState({
            imageLoading: !imagesLoaded(this.homeElement)
        });
    };

    renderSplash() {
        this.setState({
            imageLoading: false
        });
    }

    render(){
        const { imageLoading} = this.state;
        return(
            <div
                className="home"
                ref={element => {this.homeElement = element}}    
            >
                {imageLoading && <Splash />}
                <CoverImage handlePageChange={this.handlePageChange} />
                <section id="block">
                    <Menu />
                    <div className="container">
                    <BottomTabs />
                    </div>
                </section>
                <Tagline />
            </div>
        );
    }
}

export default Home;