'use client'

import { useState } from 'react'
import Link from 'next/link'
import FaAngleLeft from './icons/FaAngleLeft';
import FaAngleRight from './icons/FaAngleRight';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebarHandler = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <aside className={`h-full bg-gray-800 text-white p-4 ${isSidebarOpen ? 'w-64' : 'w-1'} transition-all ease-in-out`}>
            <div className="flex h-full justify-between">
                {isSidebarOpen ? <ul>
                    <li className='py-2 px-3 border border-white rounded-md text-center cursor-pointer hover:bg-gray-600'>
                        <Link href="/starwars">Starwars API</Link>
                    </li>
                </ul> : null
                }
                <div className='flex flex-col items-center z-10 justify-center'>
                    <div className="cursor-pointer" onClick={toggleSidebarHandler}>
                        {isSidebarOpen ? <FaAngleLeft /> : <FaAngleRight />}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;