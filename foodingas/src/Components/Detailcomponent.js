import React, { Component } from 'react';

import CommentDeta from './CommentDetail'
import moment from 'moment';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDishDetail({ dish }) {
    if (dish)
        return ( <
            Card >
            <
            CardImg top src = { dish.image }
            alt = { dish.name }
            /> <
            CardBody >
            <
            CardTitle > { dish.name } < /CardTitle> <
            CardText > { dish.description } < /CardText> < /
            CardBody > <
            /Card>
        );
    else
        return ( <
            div > < /div>
        );


}

const Detail = (props) => {
    return ( <
        div className = "container" >
        <
        div className = "row" >
        <
        Breadcrumb >

        <
        BreadcrumbItem > < Link to = "/menu" > Menu < /Link></BreadcrumbItem >
        <
        BreadcrumbItem active > { props.dish.name } < /BreadcrumbItem> < /
        Breadcrumb > <
        div className = "col-12" >
        <
        h3 > { props.dish.name } < /h3> <
        hr / >
        <
        /div>                 < /
        div > <
        div className = "row" >
        <
        div className = "col-12 col-md-5 m-1" >
        <
        RenderDishDetail dish = { props.dish }
        />  < /
        div > <
        div className = "col-12 col-md-5 m-1" >
        <
        CommentDeta comments = { props.comments }
        /> < /
        div > <
        /div> < /
        div >
    );
}
export default Detail;