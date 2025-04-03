document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded. Mounting Vue...");

    const app = Vue.createApp({
        data() {
            return {
                products: [
                    { id: 1, title: "Eggplant Almaz", short_text: "Popular Ukrainian variety", image: "almaz.png", link: "eggplant-one.html#1" },
                    { id: 2, title: "Eggplant Black Beauty", short_text: "Classic American variety", image: "black-beauty.png", link: "eggplant-one.html#2" },
                    { id: 3, title: "Eggplant White Egg", short_text: "White variety", image: "white-egg.png", link: "eggplant-one.html#3" },
                    { id: 4, title: "Eggplant Thai Green", short_text: "Exotic variety", image: "green.png", link: "eggplant-one.html#4" },
                    { id: 5, title: "Eggplant Rotonda Bianca", short_text: "Italian variety", image: "rotunda-bianca.png", link: "eggplant-one.html#5" }
                ],
                selectedProducts: [],
                cart: [],
                contactFields: { name: "", email: "", message: "" },
                orderPlaced: false,
                product: [],
                btnVisible: 0,
                isAddedToCart: false,
            };
        },
        mounted() {
            this.loadCart();
            this.getProduct(); // Get product based on hash in URL
            this.checkInCart(); // Check if the current product is in the cart
        },
        methods: {
            // Adds a product to the cart
            addToCart(id) {
                let storedCart = JSON.parse(localStorage.getItem('prod')) || [];
                if (!storedCart.includes(id)) {
                    storedCart.push(id); // Add product to cart
                    localStorage.setItem('prod', JSON.stringify(storedCart)); // Update localStorage
                    this.loadCart(); // Reload the cart
                    console.log(`Product with ID ${id} added to cart`);
                    this.isAddedToCart = true; // Update the button state
                    // Update URL with the correct hash
                    window.location.hash = id;
                } else {
                    console.log(`Product with ID ${id} is already in the cart`);
                }
            },
            // Load cart from localStorage
            loadCart() {
                const storedProducts = JSON.parse(localStorage.getItem('prod')) || [];
                this.selectedProducts = storedProducts;
                this.cart = this.products.filter(product => storedProducts.includes(product.id));
            },
            // Check if the product is already in the cart
            checkInCart() {
                const productId = this.product[0]?.id; // Get the current product's ID
                const storedCart = JSON.parse(localStorage.getItem('prod')) || [];
                if (productId && storedCart.includes(productId)) {
                    this.isAddedToCart = true; // Product is in the cart
                } else {
                    this.isAddedToCart = false; // Product is not in the cart
                }
            },
            // Get the product from the hash in the URL
            getProduct() {
                const hash = window.location.hash.substring(1); // Get the product ID from the URL hash
                if (hash) {
                    const productId = parseInt(hash);
                    const foundProduct = this.products.find(product => product.id === productId);
                    if (foundProduct) {
                        this.product = [foundProduct]; // Set the found product in the product array
                    }
                }
            },
            // Navigate to the cart page
            goToCart() {
                window.location.href = 'contact-us.html'; // Redirect to the contact or cart page
            },
            // Example function to place an order and clear the cart
            makeOrder() {
                this.submittedContactFields = { ...this.contactFields };
                this.orderPlaced = true;
                this.selectedProducts = [];
                this.cart = [];
                this.contactFields = { name: "", email: "", message: "" };
                localStorage.removeItem('prod');
            },
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
