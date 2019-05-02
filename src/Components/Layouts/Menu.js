import React,{ Component } from 'react';
import { MenuDetails } from '../../constants/MenuDetails';
import MenuItems from './MenuItems';

 class Menu extends Component {
    constructor(props){
        super(props);
        this.state= {
            menuList: MenuDetails,
        };
    }
    
    render(){
        return(
            <div class="container">
                 <div className="row">
                    {this.state.menuList.map(item => 
                    <MenuItems
                    key={item.objectID}
                    row={item.row}
                    objectID={item.objectID}
                    className={item.className}
                    imageClass={item.imageClass}
                    image_title={item.image_title}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    shortDescription={item.shortDescription} 
                    />
                    )}
                 </div>
            </div>
        );
    }
}

export default Menu;