import { People } from '@/typing';
import PeopleTable from './PeopleTable';

async function getData() {
  const res = await fetch('https://swapi.dev/api/people')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data : People = await getData();
 
  return (
    <section className='overflow-x-auto'>
      <h2 className='text-center text-2xl font-bold'>People</h2>
      <PeopleTable data={data.results} />
    </section>
  )
}