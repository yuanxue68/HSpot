import React, {Component} from 'react'

export default class Step extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				<div>{this.props.info.index}</div>
				<div>{this.props.info.title}</div>
				<div>{this.props.info.details}</div>
			</div>
		)
	}
}