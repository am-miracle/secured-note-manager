"use client"
import { SignInButton, SignOutButton, SignUpButton, useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const {user} = useClerk();
  return (
    <nav className="relative flex w-full items-center justify-between bg-inherit py-4 shadow-sm shadow-neutral-700/10">
        <div className="container mx-auto">
            <div className="flex w-full flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <Link className="text-white text-xl" href="#!">
                        Note-Keeper
                    </Link>
                </div>
                {user ? (
                    <div className="my-1 flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full flex items-center justify-center border-blue-800 border">
                            <span>
                            {`${user.firstName && user.lastName
                                ? `${user.firstName.slice(0, 1).toUpperCase()}${user.lastName.slice(0, 1).toUpperCase()}`
                                : user.username || ''}`}
                            </span>
                        </div>
                        <button type="button"
                            className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-blue-800">
                            <SignOutButton />
                        </button>
                    </div>
                ):(
                    <div className="my-1 flex items-center gap-2">
                        <button type="button"
                        className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white border border-blue-800">
                        <SignInButton />
                        </button>
                        <button type="button"
                        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-blue-800">
                        <SignUpButton />
                        </button>
                    </div>
                )
                }
            </div>
        </div>
    </nav>
  )
}

export default Header