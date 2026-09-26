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
        image: "./assets/images/hairs/Hair_extension2.png",
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
    {
        id: 9,
        title: "Premium Human Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair4_98gm_55cm.png",
        alt: "Premium Hair 98gm 55cm",
        category: "hair",
    },
    {
        id: 10,
        title: "Premium Human Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair5_98gm_65cm.png",
        alt: "Premium Hair 98gm 65cm",
        category: "hair",
    },
    {
        id: 11,
        title: "Keratin Extension Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair_extension.png",
        alt: "Keratin extension",
        category: "keratin",
    },
    {
        id: 12,
        title: "Premium Human Hair",
        description: "Premium human hair selected for softness, natural movement, and seamless blending. Available in different lengths, shades, and weights for a customized result.",
        price: 500,
        image: "./assets/images/hairs/Hair5_98gm_65cm.png",
        alt: "Premium Hair 98gm 65cm",
        category: "hair",
    },
];
const catalogGrid = document.querySelector(".catalog-grid");
const categoryButtons = document.querySelectorAll(".category-button");
const nextButton = document.querySelector(".pagination__btn--next");
const prevButton = document.querySelector(".pagination__btn--prev");
const firstButton = document.querySelector(".pagination__btn--first");
const lastButton = document.querySelector(".pagination__btn--last");
const currentPageButton = document.querySelector(".pagination__btn--current");

const PRODUCTS_PER_PAGE = 4;
let currentPage = 1;
let currentProducts = products;

function renderProducts(productsToRender) {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const productsForPage = productsToRender.slice(startIndex, endIndex);
  
    catalogGrid.innerHTML = "";
  
    productsForPage.forEach(product => {
      const productCard = document.createElement("article");
      productCard.classList.add("product-card");
      productCard.dataset.category = product.category;
  
      const productImage = document.createElement("img");
      productImage.classList.add("product-card__image");
      productImage.src = product.image;
      productImage.alt = product.alt;
      productCard.append(productImage);
  
      const productContent = document.createElement("div");
      productContent.classList.add("product-card__content");
      productCard.append(productContent);
  
      const productTitle = document.createElement("h2");
      productTitle.classList.add("product-card__title");
      productTitle.textContent = product.title;
      productContent.append(productTitle);
  
      const productDescription = document.createElement("p");
      productDescription.classList.add("product-card__description");
      productDescription.textContent = product.description;
      productContent.append(productDescription);
  
      const productPrice = document.createElement("p");
      productPrice.classList.add("product-card__price");
      productPrice.textContent = `$${product.price}`;
      productContent.append(productPrice);
  
      const productButton = document.createElement("button");
      productButton.classList.add("product-card__button");
      productButton.type = "button";
      productButton.textContent = "View Details";
      productCard.append(productButton);
  
      catalogGrid.append(productCard);
    });
  
    updatePagination();
  }
  
  
  function updatePagination() {
    const totalPages = Math.ceil(
        currentProducts.length / PRODUCTS_PER_PAGE
      );
    
      currentPageButton.textContent = currentPage;
  
    firstButton.disabled = currentPage === 1;
    prevButton.disabled = currentPage === 1;
  
    nextButton.disabled = currentPage === totalPages;
    lastButton.disabled = currentPage === totalPages;
  }
  
  
  renderProducts(products);
  
  
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.category;
  
      categoryButtons.forEach(categoryButton => {
        categoryButton.classList.remove("category-button--active");
      });
  
      button.classList.add("category-button--active");
  
      if (selectedCategory === "all") {
        currentProducts = products;
      } else {
        currentProducts = products.filter(
          product => product.category === selectedCategory
        );
      }
  
      currentPage = 1;
  
      renderProducts(currentProducts);
    });
  });
  
  
  nextButton.addEventListener("click", () => {
    const totalPages = Math.ceil(
      currentProducts.length / PRODUCTS_PER_PAGE
    );
  
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts(currentProducts);
    }
  });
  
  
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts(currentProducts);
    }
  });
  
  
  firstButton.addEventListener("click", () => {
    currentPage = 1;
    renderProducts(currentProducts);
  });
  
  
  lastButton.addEventListener("click", () => {
    const totalPages = Math.ceil(
      currentProducts.length / PRODUCTS_PER_PAGE
    );
  
    currentPage = totalPages;
    renderProducts(currentProducts);
  });