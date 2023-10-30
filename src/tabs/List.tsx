import React from "react";
import {listMocks} from "mocks";
export default function List() {
    return (
        <ul className="divide-y divide-gray-100">
            {listMocks.map(({imgSrc, email, name, position, status}) => (
                <li className="flex justify-between gap-x-6 py-5" key={email}>
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={imgSrc} alt={name}/>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{email}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{position}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">{status}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}