import Link from 'next/link';

const getLink = (text :string, index: number | null) => {
    const localApi = text.replace('https://swapi.dev/api/', '/starwars/');
    const regex = /\/(\d+)\/.*?$/;
    const match = localApi.match(regex);
    if (match) {
        const lastNumber = match[1];
        if (index !== null)
            return <Link key={index} href={localApi} className="ml-2 hover:underline hover:text-blue-600 transition duration-150 ease-out">{lastNumber}</Link>
        else
            return <Link href={localApi} className="hover:underline hover:text-blue-600 transition duration-150 ease-out">{lastNumber}</Link>
    }
    return <></>
}

export const getCommaSeparatedLinks = (text: string | string[]) => {
    const testArr = text as string[];
     if (Array.isArray(testArr)) {
        return (testArr as string[]).map((x, index) => getLink(x, index));
      } else {
        return getLink(testArr, null);
      }
}