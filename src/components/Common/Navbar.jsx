import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../data/navbar-links"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropdown"
import { fetchCatalogs } from "../../slices/catalogSlice"

function Navbar() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()
  const dispatch = useDispatch()

  // const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const catalogs = useSelector((state)=>state.catalog.catalogs)
  const subLinks=catalogs


  useEffect(() => {
    dispatch(fetchCatalogs())
  }, [])
  // useEffect(() => {
  //   ;(async () => {
  //     setLoading(true)
  //     try {
  //       const res = await apiConnector("GET", categories.CATEGORIES_API)
  //       const receivedData = res?.data?.data
  //       if (Array.isArray(receivedData)) {
  //         setSubLinks(receivedData)
  //       } else {
  //         setSubLinks([])
  //         console.warn("Unexpected subLinks format:", receivedData)
  //       }
  //     } catch (error) {
  //       console.log("Could not fetch Categories.", error)
  //       setSubLinks([])
  //     }
  //     setLoading(false)
  //   })()
  // }, [])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    // <div className="sticky">
    <div
      className={`relative flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" className="ml-4 lg:ml-0"/>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : Array.isArray(subLinks) && subLinks.length > 0 ? (
                        subLinks
                          .filter(
                            (subLink) =>
                              Array.isArray(subLink?.courses) &&
                              subLink.courses.length > 0
                          )
                          .map((subLink, i) => (
                            <Link
                              to={`/catalog/${subLink.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                              key={i}
                            >
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {!token && (
            <>
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                  Sign up
                </button>
              </Link>
            </>
          )}
          {token && <ProfileDropdown />}
        </div>

      </div>
      {/* This is for mobile view otherwise hidden */}
      <button
          className="mr-4 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AiOutlineMenu
            fontSize={24}
            fill="#AFB2BF"
            className={`transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {isMobileMenuOpen && (
          <div className="flex items-center justify-center absolute top-14 z-50 w-full h-screen bg-richblack-800 px-6 py-4 text-richblack-25 transition-all duration-300 md:hidden">
            <ul className="flex flex-col gap-y-4 justify-between items-center w-full">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1">
                        Catalog
                        <BsChevronDown className="transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="ml-4 mt-2 flex flex-col gap-y-1">
                        {Array.isArray(subLinks) &&
                        subLinks.length > 0 &&
                        !loading ? (
                          subLinks
                            .filter(
                              (subLink) =>
                                Array.isArray(subLink?.courses) &&
                                subLink.courses.length > 0
                            )
                            .map((subLink, i) => (
                              <Link
                                key={i}
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))
                        ) : (
                          <p>No Courses</p>
                        )}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={link?.path}
                      className={`block py-1 ${
                        matchRoute(link?.path) ? "text-yellow-25" : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}

              {/* Login / Signup / Profile */}
              {!token ? (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="rounded-[8px] border border-richblack-700 bg-richblack-700 px-[12px] py-[8px] text-richblack-100">
                      Log In
                    </button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="rounded-[8px] border border-richblack-700 bg-richblack-700 px-[12px] py-[8px] text-richblack-100">
                      Sign Up
                    </button>
                  </Link>
                </>
              ) : (
                <div className="mt-4">
                  <ProfileDropdown />
                </div>
              )}
            </ul>
          </div>
        )}

    </div>
    // </div>
  )
}

export default Navbar
