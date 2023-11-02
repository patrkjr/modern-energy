const Layout = ({ preview, children }) => {
  //preview could be an option prop which will render an "Alert" component aka the info top bar
  return(
    <div className="flex flex-col min-h-screen">
      <main>
        {children}
      </main>
    </div>
  )

}

export default Layout;