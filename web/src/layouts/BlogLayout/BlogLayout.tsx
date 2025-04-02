import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header>
        <div className="flex justify-between items-center bg-green-700">
          <h1 className="text-5xl p-10">
            <Link to={routes.home()}>Dream Journal</Link>
          </h1>
          <nav className="pr-48 text-white text-lg">
            <ul>
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
              {isAuthenticated ? (
                <div className="flex justify-between">
                  <button type="button" onClick={logOut}>
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()}>Login</Link>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
