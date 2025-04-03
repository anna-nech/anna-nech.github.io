document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded. Mounting Vue...");

    const app = Vue.createApp({
        data() {
            return {
                products: [
                    { id: 1, title: "Eggplant Almaz", short_text: "Popular Ukrainian variety", image: "almaz.png" },
                    { id: 2, title: "Eggplant Black Beauty", short_text: "Classic American variety", image: "black-beauty.png" },
                    { id: 3, title: "Eggplant White Egg", short_text: "White variety", image: "white-egg.png" },
                    { id: 4, title: "Eggplant Thai Green", short_text: "Exotic variety", image: "green.png" },
                    { id: 5, title: "Eggplant Rotonda Bianca", short_text: "Italian variety", image: "rotunda-bianca.png" }
                ],
                selectedProducts: [],
                cart: [],
                contactFields: { name: "", email: "", message: "" },
                orderPlaced: false
            };
        },
        mounted() {
            this.loadCart();
        },
        methods: {
            addItem(id) {
                console.log("Adding product with ID:", id);
                if (!this.selectedProducts.includes(id)) {
                    this.selectedProducts.push(id);
                    this.updateCart();
                }
            },
            removeFromCart(id) {
                this.selectedProducts = this.selectedProducts.filter(pid => pid !== id);
                this.updateCart();
            },
            updateCart() {
                this.cart = this.products.filter(product => this.selectedProducts.includes(product.id));
                localStorage.setItem('prod', JSON.stringify(this.selectedProducts));
            },
            loadCart() {
                const storedProducts = JSON.parse(localStorage.getItem('prod')) || [];
                this.selectedProducts = storedProducts;
                this.cart = this.products.filter(product => storedProducts.includes(product.id));
            },
            makeOrder() {
                this.submittedContactFields = { ...this.contactFields };
                this.orderPlaced = true;
                this.selectedProducts = [];
                this.cart = [];
                this.contactFields = { name: "", email: "", message: "" };
                localStorage.removeItem('prod');
            }            
        }
    });

    // Check if #app exists before mounting
    const appElement = document.querySelector("#app");
    if (appElement) {
        console.log("Mounting Vue app...");
        app.mount("#app");
    } else {
        console.error("Vue could not find #app. Make sure the script runs after the page loads.");
    }
});
