import Link from 'next/link'

const Sidebar = () => {
    return (
        <ul>
            <li><Link href="/starwars" >Starwars API</Link></li>
        </ul>
    )
}

export default Sidebar;