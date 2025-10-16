async function loadCategories() {
    try {
        const response = await fetch('data/sneakers.json');
        const data = await response.json();

        const categoriesContainer = document.querySelector("#categories-container");
        if (!categoriesContainer) return;

        // Get unique categories
        const uniqueCategories = [...new Set(data.sneakers.map(item => item.category))];

        uniqueCategories.forEach(category => {
            const card = document.createElement('div');
            card.classList.add('category-card');

            const firstSneaker = data.sneakers.find(item => item.category === category);

            card.innerHTML = `
        <img src="${firstSneaker.image}" alt="${category} sneakers" loading="lazy" width="300" height="250">
        <h3 class="category-title">${category}</h3>
      `;
            categoriesContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading categories:", error);
    }
}

loadCategories();
