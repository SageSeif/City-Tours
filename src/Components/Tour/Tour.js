import React, {Component} from "react";
import "./Tour.scss";
export default class Tour extends Component
{
    render() {
        return (
            
            <article className="tour">
                <div className="img-container">
                    <img src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600://images.pexels.com/photos/13792566/pexels-photo-13792566.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="">
                    </img>
                    <span className="close-btn">
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3> City </h3>
                    <h4> name </h4>
                    <h5> 
                        Info{""}
                        <span>
                            <i className="fas fa-caret-square-down"/>    
                        </span>  
                    </h5>
                    <p>
                        lorem ipsum
                    </p>
                </div>
            </article>
        )
    }
}