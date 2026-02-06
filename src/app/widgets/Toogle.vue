<template>
	<label class="switch">
		<input type="checkbox" v-model="value" @change="change()">
		<span class="slider round"></span>
	</label>
</template>

<script>
export default {
	name: 'Toogle',
	props: {
		modelValue: String // раньше было `value: String`
	},
	data() {
		return {
			value: ""
		}
	},
	watch: {
		modelValue: function(o, n) {
			this.value = this.modelValue;
		}
	},
	mounted() {
		this.value = this.modelValue;
	},
	methods: {
		change() {
			this.$emit('update:modelValue', this.value.toString());
		}
	}
}
</script>
