import querystring from "querystring";


const calculateOrderAmount = items => {
  return 350;
};


exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const secretKey = process.env.STRIPE_SECRET_KEY || "rk_test_zuXD31a4jT5BQJcy6uuxZCrN00SDqTNaPd"
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY || "pk_test_7qDuIgW30JQRKsuM62ZCyLqn00fztzEzpC"
  const stripe = require("stripe")(secretKey);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 350,
    currency: "eur",
    payment_method_types: ["ideal", "card"]
  });
  console.log(paymentIntent)
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      publishableKey: publishableKey,
      clientSecret: paymentIntent.client_secret
    }),
  })
}
