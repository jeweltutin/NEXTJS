export default function Layout({ children }) {
    return (
      <>
        {/* <header>Website</header> */}
        <main>{children}</main>
        <footer>&copy; Website</footer>
      </>
    );
  }