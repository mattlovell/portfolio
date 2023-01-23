import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Navigation from './navigation'
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation></Navigation>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
