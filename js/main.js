document.addEventListener("DOMContentLoaded", function () {
    const app = Vue.createApp({
        data() {
            return {
                products: [
                    { id: 1, title: "Eggplant Almaz", short_text: "Popular Ukrainian variety", image: "almaz.png", desc: "A medium-maturing variety with cylindrical dark purple fruits." },
                    { id: 2, title: "Eggplant Black Beauty", short_text: "Classic American variety", image: "black-beauty.png", desc: "Large, dark purple eggplant with glossy skin and tender flesh." },
                    { id: 3, title: "Eggplant White Egg", short_text: "White variety", image: "white-egg.png", desc: "Has small white egg-shaped fruits with a mild taste and no bitterness." },
                    { id: 4, title: "Eggplant Thai Green", short_text: "Exotic variety", image: "green.png", desc: "Light green eggplant, popular in Thai cuisine, with tender flesh." },
                    { id: 5, title: "Eggplant Rotonda Bianca", short_text: "Italian variety", image: "rotunda-bianca.png", desc: "Round, light purple eggplant with a soft taste, ideal for baking." }
                ],
                selectedProducts: []
            };
        },
        mounted() {
            const storedProducts = localStorage.getItem('prod');
            if (storedProducts) {
                this.selectedProducts = JSON.parse(storedProducts);
            }
        },
        methods: {
            addItem(id) {
                if (!this.selectedProducts.includes(id)) {
                    this.selectedProducts.push(id);
                    localStorage.setItem('prod', JSON.stringify(this.selectedProducts));
                }
            }
        }
    });

    app.mount("#app");
});
