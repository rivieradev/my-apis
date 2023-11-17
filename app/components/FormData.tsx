import { Starwars } from "@/typing";

interface IProps {
    data: Starwars
}

const FormData = ({ data } : IProps) => {
    const fieldNames: string[] = Object.keys(data);

    return (
        <form className="p-6 bg-gray-100 shadow-md rounded-md">
            {fieldNames.map((field, index) =>
                <div key={index} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 capitalize">{`${field.split('_').join(' ')}:`}</label>
                    <input
                        type="text"
                        value={data[field as keyof typeof data]}
                        readOnly
                        className="w-full bg-gray-200 rounded-md p-2"
                    />
                </div>
            )}
        </form>
    );
};

export default FormData