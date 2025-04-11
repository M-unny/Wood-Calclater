let woodPieces = [];

function addWood() {
  const length = parseFloat(document.getElementById('length').value);
  const breadth = parseFloat(document.getElementById('breadth').value);
  const height = parseFloat(document.getElementById('height').value);
  const quantity = parseInt(document.getElementById('quantity').value);

  if (isNaN(length) || isNaN(breadth) || isNaN(height) || isNaN(quantity)) {
    alert("Please enter valid numbers for all fields!");
    return;
  }

  woodPieces.push({ length, breadth, height, quantity });

  updateWoodList();
  clearInputs();
}

function updateWoodList() {
  const woodList = document.getElementById('woodList');
  woodList.innerHTML = "<h3>Added Wood Pieces:</h3>";
  woodPieces.forEach((piece, index) => {
    woodList.innerHTML += `#${index + 1}: ${piece.length} x ${piece.breadth} x ${piece.height} (Qty: ${piece.quantity})<br>`;
  });
}

function clearInputs() {
  document.getElementById('length').value = '';
  document.getElementById('breadth').value = '';
  document.getElementById('height').value = '';
  document.getElementById('quantity').value = '';
}

function calculateTotal() {
  if (woodPieces.length === 0) {
    alert("Please add at least one wood size!");
    return;
  }

  let totalCFT = 0;

  woodPieces.forEach(piece => {
    let cft = (piece.length * piece.breadth * piece.height) / 144;
    cft *= piece.quantity;
    totalCFT += cft;
  });

  const costPerCFT = parseFloat(document.getElementById('costPerCFT').value);

  if (isNaN(costPerCFT)) {
    alert("Please enter a valid cost per CFT!");
    return;
  }

  const totalAmount = totalCFT * costPerCFT;

  document.getElementById('result').innerHTML = `
    <strong>Total Cubic Feet (CFT):</strong> ${totalCFT.toFixed(2)}<br>
    <strong>Total Amount:</strong> ₹${totalAmount.toFixed(2)}
  `;
}
