import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Product from "../components/Product"
import Head from "../components/Head"
import { useStaticQuery, graphql } from "gatsby"

function Home() {
  const data = useStaticQuery(graphql`
   query {
    allContentfulProduct {
      edges {
        node {
          price
          name
          category
          description
          images {
            resize(quality: 100) {
              src
            }
          }
          productId
        }
      }
    }
  }
  `)
  // get all categories
  let categories = data.allContentfulProduct.edges
    .map(edge => edge.node.category)

  categories = new Set(categories)

  // alphabetize categories
  categories = [...(new Set(categories))].sort()

  let mainContent = []

  // sort all products  by category to display
  for (let category of categories) {
    let products = data.allContentfulProduct.edges
      .filter(edge => edge.node.category === category)
      .map(edge => {
        return <Product product={edge} />
      })

    mainContent.push(
      <section>
        <div className="mb-12">
          <h2 className="category text-center text-6xl capitalize relative">{
            !isNaN(category.charAt(0)) ? category.substr(1) : category
          }s</h2>
        </div>
        <div className="flex flex-wrap justify-evenly lg:justify-between">
          {products}
        </div>
      </section>
    )
  }


  return (
    <div className="min-h-screen flex flex-col">
      <Head />
      <Header />
      <div className="jumbo mt-16 flex items-center justify-center text-white text-5xl lg:text-6xl">
        <h1><span>Always</span> in Style</h1>
      </div>
      <main class="mx-auto flex-grow mt-12 w-11/12 lg:w-9/12">
        {mainContent}
      </main>
      <Footer />
    </div>
  )
}

export default Home
