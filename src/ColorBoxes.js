import React, {Component} from "react";
import Box from "./Box";
import "./styles/ColorBoxes.css";

class ColorBoxes extends Component{
    static defaultProps = {
        colors: ['maroon', 'silver', 'gray', 'white', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange']
    }

    render(){
        return (
            <div className="ColorBoxes">
                <h2>Color Boxes</h2>
                <p>Click on any color box to randomnly change the color.</p>
                <div className = "ColorBoxes-boxes-container">
                    {
                        this.props.colors.map((color) => {
                            return <Box 
                                color = {color}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}


export default ColorBoxes;