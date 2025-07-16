async function getBinancePrice(symbol = "BTCUSDT") {
  const endpoint = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const priceElement = document.getElementById("price");
    if (priceElement) {
      priceElement.innerText = `Harga ${symbol}: $${parseFloat(data.price).toFixed(2)}`;
    }
  } catch (error) {
    console.error("Gagal mengambil data harga:", error);
  }
}

// Jalankan saat halaman dimuat
window.onload = () => getBinancePrice();
