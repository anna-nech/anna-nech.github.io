	export const header = {		
		data: function () {
		  return {
		  }
		},
		watch:{
		},
		mounted() {
			this.parent = this.$parent.$parent.$parent;
		},
		methods:{

		},
		template:`
				<header class="header">				
					<msg ref="msg"/>				
				</header>			
		`
	};	