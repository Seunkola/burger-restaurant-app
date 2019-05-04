import React from 'react';
import {MenuTypes} from '../../constants/MenuTypes';

const BottomTabs = () => {
    return (
        <div className="row forth_sec">
            {MenuTypes.map(item =>
                <div class="col-sm-4" key={item.title}>
                    <div className={item.className}>
                        <div class="inner_content">
                            <span class={item.imageClass}></span>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export {BottomTabs};