import React from "react";
import tabs from 'tabs.json'
import {Link, useLocation} from "react-router-dom";
import {orderBy} from "lodash";
import clsx from "clsx";

export default function Layout({children}: {children: React.ReactNode}) {
    const location = useLocation()
    const orderedTabs = orderBy(tabs, 'order')

    //Also maybe at any point it makes sense to save last visited route to localstorage
    //so the user is able to enter exactly the same page after he arrives again

    return (
        <div className="min-h-screen flex flex-col">
            <header className="px-20 py-6 w-full flex justify-center">
                <nav>
                    <ul className="flex items-center space-x-4">
                        {orderedTabs.map(({title, id}) => (
                            <li key={title}>
                                <Link
                                    className={clsx("font-bold text-sm text-slate-500 transition-all duration-150", {
                                        'text-slate-900': location.pathname === `/${id}`,
                                        'hover:text-slate-600': location.pathname !== `/${id}`
                                    })}
                                    to={`/${id}`}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div className="flex flex-1 w-full flex-col mt-8 px-20 rounded-md space-y-2">
                {children}
            </div>
            <footer className="px-20 my-4 text-[10px] text-slate-600">
                CSM 2023. All rights reserved
            </footer>
        </div>
    )
}