import getStockData from "./fakeStockAPI.js";
setInterval(() => {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 1500);
let prevPrice = null;
function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");
  const { name, sym, price, time } = stockData;
  const priceDirectionIcon =
    price > prevPrice
      ? "green.svg"
      : price < prevPrice
      ? "red.svg"
      : "grey.svg";
  const priceIconElement = document.createElement("img");
  priceIconElement.src = `svg/${priceDirectionIcon}`;
  priceIconElement.alt = "Price direction icon";
  stockDisplayPriceIcon.innerHTML = "";
  stockDisplayPriceIcon.appendChild(priceIconElement);
  stockDisplayName.innerHTML = name;
  stockDisplaySymbol.innerHTML = sym;
  stockDisplayPrice.innerHTML = price;
  stockDisplayTime.innerHTML = time;
  prevPrice = price;
}
