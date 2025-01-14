const prices = {
    apple: 5000,
    banana: 7000,
    cherry: 1000
};

const itemInputs = [
    document.getElementById('item1'),
    document.getElementById('item2'),
    document.getElementById('item3')
];

const quantityInputs = [
    document.getElementById('quantity1'),
    document.getElementById('quantity2'),
    document.getElementById('quantity3')
];

const priceDisplays = [
    document.getElementById('priceDisplay1'),
    document.getElementById('priceDisplay2'),
    document.getElementById('priceDisplay3')
];

for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('input', function() {
        const itemName = itemInputs[i].value.toLowerCase();
        const quantity = parseInt(quantityInputs[i].value) || 0;
        if (itemName in prices) {
            const totalItemPrice = quantity * prices[itemName];
            priceDisplays[i].textContent = `Total: ${totalItemPrice} Toman`;
        } else {
            priceDisplays[i].textContent = '';
        }
    });
}

document.getElementById('calculateButton').addEventListener('click', function() {
    const items = [
        document.getElementById('item1').value.toLowerCase(),
        document.getElementById('item2').value.toLowerCase(),
        document.getElementById('item3').value.toLowerCase()
    ];

    const quantities = [
        parseInt(document.getElementById('quantity1').value) || 0,
        parseInt(document.getElementById('quantity2').value) || 0,
        parseInt(document.getElementById('quantity3').value) || 0
    ];

    calculateTotal(items, quantities, prices);
});

function calculateTotal(items, quantities, prices) {
    let total = 0;
    let i = 0;

    while (i < items.length) {
        if (items[i] in prices) {
            total += quantities[i] * prices[items[i]];
        } else if (items[i]) {
            alert(`Invalid item: ${items[i]}`);
            return;
        }
        i++;
    }

    document.getElementById('result').textContent = `Total Price: ${total} Toman`;
}