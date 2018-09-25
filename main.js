"use strict";

const app = new Vue({
	el: "#myFirstApp",
	data:
	{
		Ismahene:
		{
			fname:"Ismahene",
			lname:"Larbi",
			age:24,
			credit:1e6,
			job:"data scientist",
		},
		Brendon:
		{
			fname:"Brendon",
			lname:"Larbi",
			age:42,
			credit:1e9,
			job:"super hero",
		},
	},
	computed:
	{
		getCreditInAYear()
		{
			return(this.Ismahene.credit + 1e6);
		}
	},
	filters:
	{
		getFullName(value)
		{
			return(`${value.fname} ${value.lname}`);
		},
		getAge(value)
		{
			return(`${value.age}`);
		},
		getJob(value)
		{
			return(`${value.job}`);
		}
	},
	template:
			`<div>
				<h1>Hi, Bitch!</h1><br/>
				<h2>Welcome to the matrix :)</h2>
				<h2>My name is {{Ismahene | getFullName}}, I am a {{Ismahene | getAge}} year old {{Ismahene | getJob}}.</h2>
				<h2>And I predict that in ONE YEAR, my credit will be {{Ismahene.credit | getCreditInAYear}}!</h2>
			</div>`
})