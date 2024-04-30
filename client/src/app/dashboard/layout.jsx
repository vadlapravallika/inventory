import {handleSignOut} from "@/app/utils"
import Link from "next/link"

const Layout = ({children}) => {
  return (
    <div className={''}>
        <header className="bg-[#fff] shadow">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 items-center">
                <Link href="/dashboard" className="-m-1.5 p-1.5">
                    <p className="font-bold text-xl text-black header2">Inventory</p>
                </Link>
                </div>
                <div className="">
                <form
                    action={handleSignOut}
                >
                    <button className="">
                    {/* <MdLogout /> */}
                    Logout
                    </button>
                </form>
                </div>
            </nav>
        </header>
        {children}
    </div>
  )
}

export default Layout