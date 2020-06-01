import querystring from "querystring";

exports.handler = async (event, context, callback) => {
  const secretKey = process.env.STRIPE_SECRET_KEY || "rk_test_zuXD31a4jT5BQJcy6uuxZCrN00SDqTNaPd"
  const stripe = require("stripe")(secretKey);
  const { paymentIntentId } = event.queryStringParameters
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  console.log(paymentIntent)
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify(paymentIntent),
  })
}
