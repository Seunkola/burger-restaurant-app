import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import chicken from '../../images/chicken.png';
import originalBurger from '../../images/small_slider_bg.jpg';

const MenuItems = ({
    row,
    objectID,
    className,
    imageClass,
    image_url,
    image_title,
    title,
    description,
    header,
    shortDescription}) => {
    if(row === 1){
        return (
            
                objectID === 1 
                    ? 
                    <div className="col-sm-8">
                        <Link to={{
                            pathname: '/mealdetails',
                            mealDetails: {
                                name: title
                            }
                        }}>
                            <div className="feature">
                                <div className={className}>
                                    <div className={imageClass}>
                                        <img src={chicken} alt={image_title}/>
                                    </div>

                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                                <p className="caption">*Limited Time Only</p>
                            </div>
                        </Link>
                    </div> 
                    : 
                    <div className="col-sm-4">
                        <Link to={{
                            pathname: '/mealdetails',
                            mealDetails: {
                                name: title
                            }
                        }}>
                            <div className={className}>
                                <div className="shape">
                                    <span className="flaticon flaticon-burger"></span>
                                    <p>{title}</p>
                                </div>
                                <div className="signature_content">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                
        );
    };

    return(
        objectID === 3
                ?
                <div className="col-md-6">
                        <Link to={{
                            pathname: '/mealdetails',
                            mealDetails: {
                                name: title
                            }
                        }}>
                            <div className={className}>
                                <a href="" className="classic_btn">{title}</a>
                                <div className="overlay">
                                    <h3>{header}</h3>
                                    <p>{shortDescription}</p>

                                    <p className="overlay_content">{description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    :
                    <div className="col-md-6">
                        <Link to={{
                            pathname: '/mealdetails',
                            mealDetails: {
                                name: title
                            }
                        }}>
                            <div id="small_carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#small_carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#small_carousel" data-slide-to="1"></li>
                                    <li data-target="#small_carousel" data-slide-to="2"></li>
                                </ol>

                                <div className="carousel-caption">
                                    <h3>{title}</h3>
                                    <hr />

                                    <ul className="list-unstyled nutrition">
                                        <li><span className="flaticon flaticon-protein"></span><p>Protein - 33g</p></li>
                                        <li><span className="flaticon flaticon-carbohydrate"></span><p>Carbohydrates - 46gm</p></li>
                                        <li><span className="flaticon flaticon-calories"></span><p>Calories - 750 kcal</p></li>
                                    </ul>
                                    <div className="info_btn_shadow">
                                        info and nutrition
                                    </div>
                                </div>
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <img src={originalBurger} alt={image_title} />
                                    </div>
                                    <div className="item">
                                        <img src={originalBurger} alt={image_title} />
                                    </div>
                                    <div className="item">
                                        <img src={originalBurger} alt={image_title} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
    );
};

MenuItems.propTypes = {
    row: PropTypes.number.isRequired,
    objectID: PropTypes.number.isRequired,
    className: PropTypes.string,
    imageClass: PropTypes.string,
    image_title: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    header: PropTypes.string,
    shortDescription: PropTypes.string,
};

MenuItems.defaultProps = {
    className: '',
    imageClass: '',
    image_title: '',
    title: '',
    description: '',
    header: '',
    shortDescription: '',
};

export default withRouter(MenuItems);