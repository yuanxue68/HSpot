import React, {Component} from 'react'
import Step from './Step'

export default class HowTo extends Component{

	render(){
		const howToInfo = [
			{
				index:1,
				title:"Find Developer",
				details:"Search through the web site for a developer with suitable skillset"
			},
			{
				index:2,
				title:"Contact And Collaborate",
				details:"Message your candidate to express yoour interest and start collaborating"
			},
			{
				index:3,
				title:"Leave Review",
				details:"Leave your partner a feedback after collaborating"
			}
		]
		return (
			<div>
				{howToInfo.map(function(info,i){
					return <Step key={i} info={info}/>
				})}
			</div>
		)
	}
}