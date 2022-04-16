import React, {Component} from "react";
import "./styles/Box.css"

class Box extends Component{
    static defaultProps = {
        colors: ['maroon', 'silver', 'gray', 'white', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange']
    }

    constructor(props){
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            backgroundColor: this.props.color
        }
    }

    changeColor(eventObj){
        const newColors = this.props.colors.filter((color) => {
            return color !== eventObj.target.style.backgroundColor;
        });
        const pickColor = newColors[Math.floor(Math.random() * newColors.length)];
        this.setState(function(currentState){
            return {
                backgroundColor: pickColor
            }
        })
        
    }
    render(){
        return (
            <div
                onClick = {this.changeColor} 
                className = "Box" 
                style={{backgroundColor: this.state.backgroundColor}}>
            </div>
        )
    }
}

export default Box;