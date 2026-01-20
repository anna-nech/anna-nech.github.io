import {router} from './router.js';

document.addEventListener('DOMContentLoaded', function(){
	const main = {
		data() {
			return {
				user:{name:"", phone:"", email:"", date:"",auth:""},
				formData:{},
				title:"",
				date:"",
				time:"",
				token:"",
			}
		},
		watch:{
			$route:function(){

			}
		},
		mounted:function(){
		},
		methods:{			
		
		}
	};	
	
	var app = Vue.createApp(main)
	.use(router)
	.mount('#content')
});



