import { Film } from "@/typing";
import FormData from "@/app/components/FormData";

async function getData(id: string) {
    const res = await fetch(`https://swapi.dev/api/films/${id}/`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page({ params }: { params: { id: string } }) {

    const data: Film = await getData(params.id);

    return (
        <section className="max-w-md mx-auto max-h-[40rem] p-5 overflow-y-auto">
            <FormData data={data} />
        </section>
    );
};