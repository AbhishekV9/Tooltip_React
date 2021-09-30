import React,{ Component }  from 'react';
import '../stylesheet/tooltip.css'

export default class tooltip extends Component{

    constructor(props){
        super(props);

        this.state={
            hovered:false
        };
    }

    onHover=()=>{
        this.setState({
            hovered:true
        })
    }

    onLeave=()=>{
        this.setState({
            hovered:false
        })
    }

    render(){
        
        const position=this.props.position;
        const { hovered }=this.state;
        console.log(hovered)
        return(
            <div className="color half" >
                <div onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
                    <h1>this is {position}</h1>
                    <span style={{visibility: hovered ? 'visible' : 'hidden'}}>
                        <p>Thanks for Hovering! i am a tooltip</p>
                    </span>
                </div>
            </div>
        )
    }
}