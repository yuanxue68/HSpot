import React, {Component, PropTypes} from 'react'

export default class Header extends Component{
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">
							<img alt="Brand" />
						</a>
					</div>
				</div>
			</nav>
		)
	}

}
