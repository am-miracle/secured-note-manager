import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className="relative flex w-full items-center justify-between bg-inherit py-4 shadow-sm shadow-neutral-700/10">
        <div className="container mx-auto">
            <div className="flex w-full flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <Link className="text-white text-xl" href="#!">
                        Note-Keeper
                    </Link>
                </div>
                <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
                    <button type="button"
                    className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white border border-blue-800">
                    Login
                    </button>
                    <button type="button"
                    className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-blue-800">
                    Sign up
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header