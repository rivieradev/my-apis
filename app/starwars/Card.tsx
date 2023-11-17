import Link from 'next/link'

interface IProps {
  title: string;
  url: string;
};

const Card = ({ title, url } : IProps) => (
  <li className="max-w-md bg-white rounded-md shadow-lg m-4 px-6 py-4 transition hover:scale-150 ease-in-out cursor-pointer duration-100">
    <Link className="text-center" href={`/starwars/${title}`}>
      <div className="font-bold text-xl mb-2 capitalize">{title}</div>
      <p className="text-gray-700 text-base text-sm">{url}</p>
    </Link>
  </li>
);

export default Card;