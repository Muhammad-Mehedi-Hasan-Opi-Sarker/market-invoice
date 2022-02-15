document.getElementById('detail-submit-btn').addEventListener('click', function () {
    // console.log('yes');
    const buyerDetailsInput = document.getElementById('buyer-details-input').value;
    const invoiceText = document.getElementById('buyer-info');
    invoiceText.innerText = buyerDetailsInput;
    document.getElementById('buyer-details-input').value = '';

});

document.getElementById('add-details-btn').addEventListener('click', function () {
    const infoTable = document.getElementById('info-table');
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td3.classList.add('item-total');
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';
    // subtotal()

    const itemTotal = document.getElementsByClassName('item-total');
    let result = 0;
    for (const totalAmount of itemTotal) {
        result = result + parseInt(totalAmount.innerText);
    }
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = result;

    tax = result * .2;
    document.getElementById('tax').innerText = tax;

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = tax + result;

    const grandTotal2 = document.getElementById('grand-total-2');
    grandTotal2.innerText = tax + result;

})


