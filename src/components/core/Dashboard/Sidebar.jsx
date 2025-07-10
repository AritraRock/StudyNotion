import { useState } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../Common/ConfirmationModal"
import SidebarLink from "./SidebarLink"
import { Link } from "react-router-dom"
import logo from "../../../assets/Logo/Logo-Full-Light.png"
import { FaAngleDoubleRight } from "react-icons/fa";
export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative">

      <div
        className={`${
          isSidebarOpen ? "w-screen" : "w-1/12"
        } relative left-0 z-10 flex h-screen md:w-[220px] flex-col border-r border-richblack-700 bg-richblack-800 py-10 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:h-[calc(100vh-3.5rem)] sm:justify-center md:justify-start sm:items-center md:items-start`}
      >
        <div
          className={`flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-full" : "w-0 overflow-hidden"} md:w-full`}>
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
        </div>
        {/* <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" /> */}

        <div className={`flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-full" : "w-0 overflow-hidden"} md:w-full`}>
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
        <div className="flex flex-row md:hidden absolute top-3/4 justify-between items-center w-full px-3">
            <Link to="/">
               <img src={logo} alt="Logo" width={160} height={32} loading="lazy" className=""/>
             </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-3 bg-richblack-700 rounded-full transition-transform duration-300 ${
              isSidebarOpen ? "rotate-180" : ""
            }`}>
            {/* You can replace this with a custom icon */}
            {/* <span className="text-white text-lg">➤</span> */}
            <FaAngleDoubleRight/>
          </button>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}
