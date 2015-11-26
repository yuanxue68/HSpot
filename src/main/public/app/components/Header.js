import React, {Component, PropTypes} from 'react'

export default class Header extends Component{
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navbar-header">
						<a class="navbar-brand" href="#">
							<img alt="Brand" src="...">
							</img>
						</a>/
					</div>
				</div>
			</nav>
		)
	}

}
