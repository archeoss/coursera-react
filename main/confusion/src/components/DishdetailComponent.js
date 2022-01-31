import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
    }

    renderComments(comments)
    {
        if (comments)
        {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((cmnt) =>{
                            return (
                            <li className="list-unstyled-item">
                                <p>{cmnt.comment}</p>
                                <p> -- {cmnt.author}, {cmnt.date.substring(0, 10)}</p>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
        else
        {
            return (<div></div>);
        }
    }

    renderDish(dish)
    {
        if (dish != null)
        {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            )
        }
        else
        {
            return(<div></div>);
        }
    }

    render()
    {
        return this.renderDish(this.props.dish)
    }
    
}

export default DishDetail