import React, {Component} from "react";
import "./styles/Box.css"

class Box extends Component{
    constructor(props){
        super(props);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(eventObj){
        const newColors = this.props.colors.filter((color) => {
            return color !== eventObj.target.style.backgroundColor;
        });
        const pickColor = newColors[Math.floor(Math.random() * newColors.length)];
        eventObj.target.style.backgroundColor = pickColor;
        
    }
    render(){
        return (
            <div
                onClick = {this.changeColor} 
                className = "Box" 
                style={{backgroundColor: this.props.color}}>
            </div>
        )
    }
}

export default Box;