import Link from 'next/link';

const getLink = (text :string, index: number | null) => {
    const localApi = text.replace('https://swapi.dev/api/', '/starwars/');
    const regex = /\/(\d+)\/.*?$/;
    const match = localApi.match(regex);
    if (match) {
        const lastNumber = match[1];
        if (index !== null)
            return <Link key={index} href={localApi} className="hover:underline hover:text-blue-600 transition duration-150 ease-out">{lastNumber}</Link>
        else
            return <Link href={localApi} className="hover:underline hover:text-blue-600 transition duration-150 ease-out">{lastNumber}</Link>
    }
    return <></>
}

export const getCommaSeparatedLinks = (text: string | string[]) => {
    if (text === null)
        return <></>;
    if (Array.isArray(text)) {
        return text.map((x, index) => getLink(x, index));
    } else if (!text.toString().includes('http')) {
        return text;
    } else {
        return getLink(text, null);
    }
}