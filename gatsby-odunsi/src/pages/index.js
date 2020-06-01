import React from "react"
// Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlubr from "../components/aboutBlubr"
// scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlubr />
  </div>
)

export default IndexPage
