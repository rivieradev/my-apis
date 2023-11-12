import Card from './Card';

async function getData() {
  const res = await fetch('https://swapi.dev/api/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {

  const titles = ["people", "planets", "films", "species", "vehicles", "starships"]

  const data = await getData()
 
  return (
    <section>
      <h2 className='text-center text-3xl font-bold'>Starwars</h2>
      <ul className="flex flex-wrap justify-center">
        {titles.map((title, index) => (
          <Card key={index} title={title} url={data[title]} />
        ))}
      </ul>
    </section>
  )
}