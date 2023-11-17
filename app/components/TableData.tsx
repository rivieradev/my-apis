import { Starwars } from "@/typing";
import { getCommaSeparatedLinks } from "@/app/utils/helper";

interface IProps {
    data: (Starwars)[];
}

const TableData = ({ data }: IProps) => {

    const fieldNames: string[] = Object.keys(data[0]);

    return (
    <div className='overflow-x-auto max-w-4xl max-h-[40rem] p-2 rounded-md bg-white'>
        <table className="min-w-full border-separate">
          <thead>
            <tr>
              {fieldNames.map((field, index) => <th key={index} className="capitalize">{field.split('_').join(' ')}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={'even:bg-gray-100 odd:bg-white'}>
                {fieldNames.map((field, i) => {
                    const value = item[field as keyof typeof item];
                    return <td key={i} className="divide-x space-x-1 text-center mx-auto">{getCommaSeparatedLinks(value)}</td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
      );
}

export default TableData