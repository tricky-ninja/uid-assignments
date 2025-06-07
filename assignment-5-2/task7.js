// Task 7: Select all elements with class "menu-item" and attribute data-menu="true"
const menuItems = document.querySelectorAll('.menu-item[data-menu="true"]');
console.log(menuItems); // NodeList of all matching elements

// Example: iterate over them and log text
menuItems.forEach((item, idx) => {
  console.log(`Menu item ${idx + 1}:`, item.textContent.trim());
});
