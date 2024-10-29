import {Metadata} from "next";

export async function generatePageMetadata({
                                               title,
                                               description,
                                               keywords
                                           }: {
    title: string;
    description: string;
    keywords: string[];
}): Promise<Metadata> {
    return {
        title: `${title} | PSDOweb`,
        description: description,
        keywords: `psdo, psdoweb, ${keywords.join(', ')}`,
        authors: [{name: "PSDOweb"}],
        openGraph: {
            title: `${title} | PSDOweb`,
            description: description,
            authors: "PSDOweb"
        },
        twitter: {
            title: `${title} | PSDOweb`,
            description: description,
        }
    };
}
