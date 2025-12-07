document.getElementById('add-to-cart').addEventListener('click', () => {
    const itemName = document.getElementById('item-name').value;
    const itemColor = document.getElementById('item-color').value;
    const itemSize = document.getElementById('item-size').value;
    const itemPrice = parseFloat(document.getElementById('item-price').value);
  
    if (itemName && itemColor && itemSize && itemPrice) {
      const cartItems = document.getElementById('cart-items');
      const newRow = document.createElement('tr');
      
      newRow.innerHTML = `
        <td>${itemName}</td>
        <td>${itemColor}</td>
        <td>${itemSize}</td>
        <td>$${itemPrice.toFixed(2)}</td>
      `;
      cartItems.appendChild(newRow);
  
      updateTotal(itemPrice);
      clearInputs();
    } else {
      alert('Please fill in all fields!');
    }
  });
  
  function updateTotal(price) {
    const totalPriceElement = document.getElementById('total-price');
    const currentTotal = parseFloat(totalPriceElement.textContent);
    totalPriceElement.textContent = (currentTotal + price).toFixed(2);
  }
  
  function clearInputs() {
    document.getElementById('item-name').value = '';
    document.getElementById('item-color').value = '';
    document.getElementById('item-size').value = 'S';
    document.getElementById('item-price').value = '';
  }
  