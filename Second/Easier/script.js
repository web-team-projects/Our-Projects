function calculateTotal() {
    const applePrice = 2000;
    const bananaPrice = 5000;
    const cherryPrice = 1000;

    let total = 0;
    let i = 1;

    while (i <= 3) {
        const item = document.getElementById(`item${i}`).value.toLowerCase();
        const quantity = parseInt(document.getElementById(`quantity${i}`).value) || 0;

        if (item === "apple") {
            total += quantity * applePrice;
        } else if (item === "banana") {
            total += quantity * bananaPrice;
        } else if (item === "cherry") {
            total += quantity * cherryPrice;
        } else if (item) {
            alert(`Invalid item: ${item}`);
            return;
        }

        i++;
    }

    document.getElementById('result').textContent = `Total Price: ${total} Toman`;
}