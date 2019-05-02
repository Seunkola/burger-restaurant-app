import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {imagesLoaded} from '../../constants/ImagesLoaded';
import CoverImage from './CoverImage';
import { MenuDetails } from '../../constants/MenuDetails';

class MealDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            meal: '',
            quantity: '',
            imageLoading : true,
            menuList: MenuDetails,
            defaultList: MenuDetails,
        }
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.updateMealPrice = this.updateMealPrice.bind(this);
    }

    componentDidMount(){
        const name = this.props.location.mealDetails;
        if(name){
            this.setState({
                meal: name.name,
            });
        }
    }

    handlePageChange = () => {
        this.setState({
            imageLoading: !imagesLoaded(this.homeElement)
        });
    };

    filterByTitle = item => {
        const { meal } = this.state;
        if(item.title === meal){
            return true;
        }
        return false;
    }

    updateMealPrice= (quantity,price) => {
        const newPrice = price * quantity;
        return newPrice;
    }

    onQuantityChange(event,index){
        const name = event.target.name;
        const quantity = event.target.value;
        const defaultList = this.state.defaultList;

        !quantity
        ?
        this.setState({
            quantity: '',
            menuList: defaultList
        })
        :
        this.setState({ 
            quantity: quantity,
            menuList: this.state.menuList.filter(this.filterByTitle).map((item) => {
                return {
                    ...item,
                    [name]: quantity * item.price,
                }
            })
        });
       
    }

    render(){
        if(!this.state.meal){
            return (
                <section>
                    <div className="container">
                        <Link to="/">
                        <button class="btn orange" type="button">
                            <span>Return to Home Page</span>
                        </button>
                        </Link>
                    </div>
                </section>
            )
        }
        return(
            <div
            className="mealDetails"
            ref={element => {this.homeElement = element}} 
            >
                {this.state.menuList.filter(this.filterByTitle).map((item,index) => 
                <div>
                <CoverImage handlePageChange={this.handlePageChange} />
                <section id="completeOrder"><h2>{`Complete ${this.state.meal} Order`}</h2></section>
                <section className="details">
                    <div className="container">
                        <div className="col-sm-4"><h3>Description</h3></div>
                        <div className="col-sm-8"><p>{item.description}</p></div>
                    </div>
                </section>
                <section className="details">
                    <div className="container">
                        <div className="col-sm-4"><h3>Price</h3></div>
                        <div className="col-sm-8"><h3>{`Naira ${item.price}`}</h3></div>
                    </div>
                </section>
                <form>
                    <section className="details">
                        <div className="container">
                            <div className="col-sm-4"><h3>Quantity</h3></div>
                            <div className="col-sm-8">
                                <input 
                                id="quantity"
                                name="price" 
                                placeholder="1" 
                                value={this.state.quantity} 
                                onChange={event => this.onQuantityChange(event,index)}
                                required />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <Link to={{
                                pathname: '/checkout',
                                mealDetails: {
                                    name: item.title,
                                    description: item.description,
                                    amount: item.price
                                }
                            }}>
                            <button class="btn orange" type="button">
                                <span>Order Meal</span>
                            </button>
                            </Link>
                        </div>
                    </section>
                </form>
                </div>
                )}
            </div>
        )
    }
}

export default withRouter(MealDetails);