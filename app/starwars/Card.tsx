import Link from 'next/link'

interface IProps {
  title: string;
  url: string;
};

const Card = ({ title, url } : IProps) => (
  <li className="max-w-md bg-white rounded-xs shadow-lg m-4 px-6 py-4">
    <Link className="text-center" href={`/starwars/${title}`}>
      <div className="font-bold text-xl mb-2 capitalize">{title}</div>
      <p className="text-gray-700 text-base text-sm">{url}</p>
    </Link>
  </li>
);

export default Card;