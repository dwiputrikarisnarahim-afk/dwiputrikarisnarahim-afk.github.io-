<script>
  const symbols = ["BTCUSDT", "ETHUSDT", "BNBUSDT"];

  async function getMultiplePrices() {
    let html = "";
    for (let symbol of symbols) {
      const endpoint = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        html += `<p>${symbol}: $${parseFloat(data.price).toFixed(2)}</p>`;
      } catch (error) {
        html += `<p>${symbol}: Error mengambil data</p>`;
      }
    }
    document.getElementById("prices").innerHTML = html;
  }

  window.onload = () => getMultiplePrices();
</script>
