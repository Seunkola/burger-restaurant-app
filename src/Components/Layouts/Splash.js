import React,{ Component } from 'react';

class Splash extends Component {
    render() {
        return (
            <div className="wrapper">
                <div id="loading">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <div class="object" id="object_one"></div>
                            <div class="object" id="object_two"></div>
                            <div class="object" id="object_three"></div>
                            <div class="object" id="object_four"></div>
                            <div class="object" id="object_five"></div>
                            <div class="object" id="object_six"></div>
                            <div class="object" id="object_seven"></div>
                            <div class="object" id="object_eight"></div>
                            <div class="object" id="object_big"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Splash;