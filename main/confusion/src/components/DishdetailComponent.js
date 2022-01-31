import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderComments({comments})
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
                            <p> -- {cmnt.author}, {new Intl.DateTimeFormat('ru-RU', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmnt.date)))}</p>
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

function RenderDish({dish})
{
    if (dish != null)
    {
        return (
            <div>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else
    {
        return(<div></div>);
    }
}

const DishDetail = (props) => {
    if (props.dish != null)
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    }
    else
    {
        return (<div></div>);
    }
}

export default DishDetail