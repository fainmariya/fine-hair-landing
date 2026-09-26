const products = [
    {
        id: 1,
        title: "Silk Top Hair System",
        description: "Natural scalp effect with a lightweight, seamless finish.",
        price: 2000,
        image: "./assets/images/HairSystem_Lace.png",
        alt: "Silk top hair system",
        category: "hair-systems",
    },
    {
        id: 2,
        title: "Wefts",
        description: "Weft extensions are a lightweight method of adding length and volume with natural-looking movement. Pricing is based on the grams of hair required and the installation service.",
        price: 1000,
        image: "./assets/images/wefts1.jpeg",
        alt: "Wefts",
        category: "wefts",
    },
    {
        id: 3,
        title: "Premium Human Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair2_120gm_50cm.png",
        alt: "Premium Hair 120gm 50cm",
        category: "hair",
    },
    {
        id: 4,
        title: "Keratin Extension Hair",
        description: "Premium human hair for keratin extensions, selected for softness, density, and natural movement. Final price depends on the length, shade, and grams of hair required.",
        price: 1500,
        image: "./assets/images/hair1-converted.jpg",
        alt: "Keratin extension",
        category: "keratin",
    },
    {
        id: 5,
        title: "Premium Human Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair_138gm_50cm.png",
        alt: "Premium Hair 138gm 50cm",
        category: "hair",
    },
    {
        id: 6,
        title: "Premium Human Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair_128gm_55cm.png",
        alt: "Premium Hair 128gm 55cm",
        category: "hair",
    },
    {
        id: 7,
        title: "Premium Human Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair_116gm_50cm.png",
        alt: "Premium Hair 116gm 50cm",
        category: "hair",
    },
    {
        id: 8,
        title: "Premium Human Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair3_110gm_50cm.png",
        alt: "Premium Hair 110gm 50cm",
        category: "hair",
    },
];
const catalogGrid = document.querySelector(".catalog-grid");
const categoryButtons = document.querySelectorAll(".category-button");
const productCards = document.querySelectorAll(".product-card");

function renderProducts(productsToRender){
    catalogGrid.innerHTML = "";
    productsToRender.forEach(product => {
        const productCard = document.createElement("article");
        productCard.classList.add("product-card");
        productCard.dataset.category = product.category;
        const productImage = document.createElement("img");
        productImage.classList.add("product-card__image");
        productImage.src = product.image;
        productImage.alt = product.alt;
        productCard.append(productImage);
        catalogGrid.append(productCard)

})}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;
        categoryButtons.forEach(categoryButton => {
            categoryButton.classList.remove("category-button--active");
          });
      
          button.classList.add("category-button--active");
          if (selectedCategory === "all") {
            renderProducts(products)
          } else {
            const filteredProducts = products.filter(product => (product.category === selectedCategory))
            renderProducts(filteredProducts);
          }

        
    });
});
