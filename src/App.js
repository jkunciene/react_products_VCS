import Footer from "./components/footer/Footer"
import Products from "./components/products/Products"

const App = () => {
  return (
    <div>
      <h1>My Project</h1>
      <Products/>
      <Footer name="Jolitos" year={2023} />
    </div>
  )
}

export default App