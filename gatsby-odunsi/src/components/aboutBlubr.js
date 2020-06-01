import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlubr = () => {
  const data = useStaticQuery(
    graphql`
      query {
        fist: file(relativePath: { eq: "fist.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        flower: file(relativePath: { eq: "flower-mouth.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create</h3>
            <p>
              This is long establish that a reader will be distracted by the
              readable content on a page looking at its layout. The point of
              using Lorem Ipsum as that it has a more-less normal distribution
              of letters, as opposed to using 'Content here, content here',
              making it look like readable English. Many desktop publishing
              packages and web pages editors now use Lorem Ipsum as their
              default model text and a search for 'lorem ipsum' will uncover
              many web sites still in their infancy Various have involved over
              the years, sometimes by accident, sometimes on purpose (injected
              humor and the like).
            </p>
            <div className="btn-row">
              <Link to="/work">View series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.fist.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flower.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlubr
