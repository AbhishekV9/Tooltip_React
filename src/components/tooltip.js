import React,{ Component }  from 'react';

export default class tooltip extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const position=this.props.position;
        return(
            <h1>this is {position}</h1>
        )
    }
}