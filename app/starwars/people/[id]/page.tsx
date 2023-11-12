async function getData(id: string) {
    const res = await fetch(`https://swapi.dev/api/people/${id}/`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page({ params }: { params: { id: string } }) {

    const data = await getData(params.id);

    return (
        <section className="max-w-md mx-auto max-h-screen p-5 overflow-y-auto">
            <form className="p-6 bg-gray-100 shadow-md rounded-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        value={data.name}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Height:</label>
                    <input
                        type="text"
                        value={data.height}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Mass:</label>
                    <input
                        type="text"
                        value={data.mass}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Hair Color:</label>
                    <input
                        type="text"
                        value={data.hair_color}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Skin Color:</label>
                    <input
                        type="text"
                        value={data.skin_color}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Eye Color:</label>
                    <input
                        type="text"
                        value={data.eye_color}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Birth Year:</label>
                    <input
                        type="text"
                        value={data.birth_year}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                    <input
                        type="text"
                        value={data.gender}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Homeworld:</label>
                    <input
                        type="text"
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Films:</label>
                    <input
                        type="text"
                        value={data.films}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Species:</label>
                    <input
                        type="text"
                        value={data.species}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Vehicles:</label>
                    <input
                        type="text"
                        value={data.vehicles}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Starships:</label>
                    <input
                        type="text"
                        value={data.starships}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Created:</label>
                    <input
                        type="text"
                        value={data.created}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Edited:</label>
                    <input
                        type="text"
                        value={data.edited}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
            </form>∏
        </section>
    );
};