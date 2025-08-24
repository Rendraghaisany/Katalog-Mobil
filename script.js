const searchInput = document.getElementById("searchInput");
const catalog = document.getElementById("catalog");
const cards = catalog.getElementsByClassName("card");

// Modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.getElementById("closeModal");

// Search filter
searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector("h3").textContent.toLowerCase();
    if (title.indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
});

// Show modal when clicking card
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function() {
    modalTitle.textContent = this.getAttribute("data-title");
    modalDesc.textContent = this.getAttribute("data-desc");
    modalPrice.textContent = this.getAttribute("data-price");
    modal.style.display = "flex";
  });
}

// Close modal
closeModal.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
