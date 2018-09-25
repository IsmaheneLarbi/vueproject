"use strict";

const app = new Vue({
	el: "#myFirstApp",
	data:
	{
		family:
		[{
			fname:"Ismahene",
			lname:"Larbi",
			age:24,
			credit:1e6,
			job:"data scientist",
		},
		{
			fname:"Brendon",
			lname:"Larbi",
			age:42,
			credit:1e9,
			job:"super hero",
		}],
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
	methods:
	{
		incrementAge(member)
		{
			return (member.age += 1);
		},
		decrementAge(member)
		{
			return (member.age -= 1);	
		}
	},
	template:
			`<div>
				<h2>Hi, there!</h2><br/>
				<h2>Welcome to the matrix :)</h2>
				<h2 v-for="member in family">
					My name is {{member | getFullName}}, I am a {{member | getAge}} year old {{member | getJob}}.<br/>
					<div>
						<h3>Age: {{member | getAge}}</h3>
						<button v-on:click="incrementAge(member)">+</button>
						<button v-on:click="decrementAge(member)">-</button><br/>
					</div>
					<input v-model="member.fname"/>
					<input v-model="member.lname"/>
				</h2>
			</div>`
})