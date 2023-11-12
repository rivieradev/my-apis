import { Person } from "@/typing";
import { getCommaSeparatedLinks } from '@/utils/helper';

interface IProps {
    data: Person[];
};

const PeopleTable = ({ data }: IProps) => {
    return (
        <table className="min-w-full bg-white border border-gray-300 border-separate m-5 rounded-md">
          <thead>
            <tr>
              <th>Name</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
              <th>Eye Color</th>
              <th>Birth Year</th>
              <th>Gender</th>
              <th>Homeworld</th>
              <th>Films</th>
              <th>Species</th>
              <th>Vehicles</th>
              <th>Starships</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={'even:bg-gray-100 odd:bg-white'}>
                <td>{item.name}</td>
                <td>{item.height}</td>
                <td>{item.mass}</td>
                <td>{item.hair_color}</td>
                <td>{item.skin_color}</td>
                <td>{item.eye_color}</td>
                <td>{item.birth_year}</td>
                <td>{item.gender}</td>
                <td>{getCommaSeparatedLinks(item.homeworld)}</td>
                <td>{getCommaSeparatedLinks(item.films)}</td>
                <td>{getCommaSeparatedLinks(item.species)}</td>
                <td>{getCommaSeparatedLinks(item.vehicles)}</td>
                <td>{getCommaSeparatedLinks(item.starships)}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{getCommaSeparatedLinks(item.url)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default PeopleTable