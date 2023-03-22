import Provider from "./context/Provider"
import Router from "./routes/Router"

const Home = () => {
  return (
    <>
    <Provider>
    <Router/>
    </Provider>
    </>
  )
}

export default Home