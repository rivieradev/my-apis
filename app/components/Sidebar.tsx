import Link from 'next/link'

const Sidebar = () => {
    return (
        <ul>
            <li className='py-2 px-3 border border-white rounded-md text-center cursor-pointer hover:bg-gray-600'>
                <Link href="/starwars">Starwars API</Link>
            </li>
        </ul>
    )
}

export default Sidebar;