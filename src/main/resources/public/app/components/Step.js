import React, {Component} from 'react'

export default class Step extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div className="col-md-4">
				<div id="step" className={this.props.info.class}></div>
				<div className="step-title">{this.props.info.title}</div>
				<div>{this.props.info.details}</div>
			</div>
		)
	}
}