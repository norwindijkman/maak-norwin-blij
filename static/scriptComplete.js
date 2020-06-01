var urlParams = new URLSearchParams(window.location.search);
var paymentIntentId = urlParams.get("payment_intent");
var resultImage = document.getElementById("resultImage")
if (paymentIntentId) {
  fetch("/.netlify/functions/payment-intent?paymentIntentId=" + paymentIntentId)
    .then(function(result) {
      return result.json();
    })
    .then(function(paymentIntent) {
      if (paymentIntent.status !== "succeeded") {
        resultText.innerHTML="Betaling is mislukt";
        resultImage.innerHTML="<img src=\"sad.jpeg\" width=\"100%\" >";
        resultCaption.innerHTML="Norwin is enorm teleurgesteld. <a href=\"/\">Probeer het nog een keer.</a>";
      } else {
        resultText.innerHTML="Betaling is gelukt";
        resultImage.innerHTML="<img src=\"blij.jpeg\" width=\"100%\" >";
        resultCaption.innerHTML="Norwin is blij";
      }
      var paymentIntentJson = JSON.stringify(paymentIntent, null, 2);
      document.querySelector("pre").textContent = paymentIntentJson;
      setTimeout(function() {
        document.querySelector(".sr-result").classList.add("expand");
      }, 200);
    })
    .catch(function(err) {
      console.log("Error when fetching PaymentIntent", err);
    });
}
