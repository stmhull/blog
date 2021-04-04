import '../styles/global.css'
import Title from '../components/title'
import Sidebar from '../components/sidebar'

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <div className="grid-container">
      <Title />
      <Sidebar  />
      <div className="content">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
