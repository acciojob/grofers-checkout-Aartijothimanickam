const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let table=document.getElementById("myTable");
  let totalPrice = 0;
  const priceElements = document.querySelectorAll(".price");
  priceElements.forEach((element) => {
    totalPrice += parseInt(element.textContent);
  });
  let totalRow = table.insertRow();
  let totalCell = totalRow.insertCell();
  totalCell.textContent = "Total Price";
  let priceCell = totalRow.insertCell();
  priceCell.textContent = totalPrice;
  
};

getSumBtn.addEventListener("click", getSum);

