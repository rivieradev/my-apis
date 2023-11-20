import { Vehicle } from "@/typing";
import FormData from "@/app/components/FormData";

async function getData(id: string) {
    const res = await fetch(`${process.env.STARWARS_API}/vehicles/${id}/`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page({ params }: { params: { id: string } }) {

    const data: Vehicle = await getData(params.id);

    return (
        <section className="form-section">
            <FormData data={data} />
        </section>
    );
};