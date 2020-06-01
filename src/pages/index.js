import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="sr-root">
      <div className="sr-main">
        <p id="resultText">Norwin is verdrietig</p><br />
        <div id="resultImage"><img src="sad.jpeg" width="100%" /></div>
        <p id="resultCaption">Maak Norwin blij met een bakje koffie voor €3.50</p><br />

        <div className="sr-picker">
          <button className="sr-pm-button selected" id="card-button">Card</button
          ><button className="sr-pm-button" id="ideal-button">iDEAL</button>
        </div>
        <form className="sr-payment-form card">
          <div className="sr-combo-inputs-row">
            <div className="sr-input sr-element sr-card-element" id="card-element">

            </div>
            <div className="sr-input sr-element hidden" id="ideal-bank-element">

            </div>
          </div>
          <div className="sr-field-error" id="card-errors" role="alert"></div>
          <button id="submit" type="submit">
            <div className="spinner hidden" id="spinner"></div>
            <span id="button-text">Pay</span><span id="order-amount"></span>
          </button>
        </form>
        <div className="sr-result hidden">
          <p>Payment completed<br /></p>
          <pre>
            <code></code>
          </pre>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
