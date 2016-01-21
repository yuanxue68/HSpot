import React, {Component} from 'react'
import Step from './Step'

export default class HowTo extends Component{

	render(){
		const howToInfo = [
			{
				index:1,
				title:"Find Developer",
				details:"Search through the web site for a developer with suitable skillset",
				class:"fa fa-search"
			},
			{
				index:2,
				title:"Contact And Collaborate",
				details:"Message your candidate to express yoour interest and start collaborating",
				class:"fa fa-comments"
			},
			{
				index:3,
				title:"Leave Review",
				details:"Leave your partner a feedback after collaborating",
				class:"fa fa-thumbs-o-up"
			}
		]
		return (
			<div className="col-centered row how-to">
				{howToInfo.map(function(info,i){
					return <Step key={i} info={info}/>
				})}
			</div>
		)
	}
}