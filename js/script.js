function submitOrder() {
    // NORMAL CONSTANTS
    const size = document.getElementById('pSize').value;
    const type = document.getElementById('pType').value;
    const sauce = document.getElementById('pSauce').value;
    const cheese = document.getElementById('pCheese').value;
  
    // EXTRA CONSTANTS
    const extraSauce = document.getElementById('extraSauce').checked;
    const extraCheese = document.getElementById('extraCheese').checked;
    const greens = document.getElementById('greens').checked;
    const extraGreens = document.getElementById('extraGreens').checked;
  
    // PRICE CONSTANT
    const prices = {
      Medium: 8.99,
      Large: 13.99,
      sauce: 4.99,
      cheese: 1.99,
      extraSauce: 2.00,
      extraCheese: 1.00,
      greens: 0.99,
      extraGreens: 0.50
    };
  
    // HST CONSTANT
    const HST_RATE = 0.13;
  
    // IF NOTHING IS SELECTED
    if (!size || !type || !sauce) {
      alert("Please select pasta size, type, and sauce.");
      return;
    }
  
    // PRICE ADDER CALCULATION
    let subtotal = 0;
    subtotal += prices[size]; 
    subtotal += prices.sauce;
    if (cheese) subtotal += prices.cheese;
    if (extraSauce) subtotal += prices.extraSauce;
    if (extraCheese) subtotal += prices.extraCheese;
    if (greens) subtotal += prices.greens;
    if (extraGreens) subtotal += prices.extraGreens;
  
    // TAX/TOTAL CALCULATION
    const tax = subtotal * HST_RATE;
    const total = subtotal + tax;
  
    // ORDER SUMMARY
    let summary = `Your Order:\n`;
    summary += `- Size: ${size}\n`;
    summary += `- Pasta Type: ${type}\n`;
    summary += `- Sauce: ${sauce}\n`;
    summary += `- Cheese: ${cheese || 'No Cheese'}\n`;
    if (extraSauce) summary += `- Extra Sauce\n`;
    if (extraCheese) summary += `- Extra Cheese\n`;
    if (greens) summary += `- Greens\n`;
    if (extraGreens) summary += `- Extra Greens\n`;
  
    // DISPLAY FINAL ORDER SUMMARY
    document.getElementById('orderSummary').innerText = summary;
  
    document.getElementById('taxDetails').innerText =
      `Subtotal: $${subtotal.toFixed(2)}\n` +
      `HST (13%): $${tax.toFixed(2)}\n` +
      `Total: $${total.toFixed(2)}`;
  }
  