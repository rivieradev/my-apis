import { StarshipListResponse } from '@/typing';
import TableData from '@/app/components/TableData';

async function getData() {
  const res = await fetch('https://swapi.dev/api/starships')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data : StarshipListResponse = await getData();
 
  return (
    <section>
      <h2 className='text-center text-2xl font-bold'>Starships</h2>
      <TableData data={data.results} />
    </section>
  )
}