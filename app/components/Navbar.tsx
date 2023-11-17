import Link from 'next/link';

const Navbar = ({}) => {
    return (
      <ul className="flex space-x-4 text-white">
        <li className='hover:underline hover:text-blue-700'>
            <Link href={'/'}>Home</Link>
        </li>
      </ul>
    );
};

export default Navbar