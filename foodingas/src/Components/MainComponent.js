import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Detail from './Detailcomponent'
import Menu from './MenuComponents';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent'
import Header from './HeaderComponent'
import { Route, Routes } from 'react-router-dom';
import Home from './HomeComponent'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './AboutComponent';
import Contact from './contactcomponent'


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }


    render() {
            const DishWithId = ({ match }) => {
                return ( <
                    Detail

                    dish = { this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] }
                    comments = { this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }


                    />
                );
            };


            return ( <
                div >

                <
                Header / >

                <
                Routes >
                <
                Route path = '/home'
                element = { < Home dish = { this.state.dishes.filter((dish) => dish.featured)[0] }
                    promotion = { this.state.promotions.filter((promo) => promo.featured)[0] }
                    leader = { this.state.leaders.filter((leader) => leader.featured)[0] }
                    / > } / >
                    <
                    Route exact path = '/menu'
                    element = { < Menu dishes = { this.state.dishes }
                        />} / >
                        <
                        Route path = '/menu/:dishId'
                        Component = { DishWithId }

                        / >  <
                        Route path = '/about'
                        element = { < About leaders = { this.state.leaders }
                            / >
                        }
                        / > <
                        Route path = '/contactus'
                        element = { < Contact / > }
                        />  < /
                        Routes > <
                        Footer / >
                        <
                        /div>
                    );
                }

            }

            export default Main;