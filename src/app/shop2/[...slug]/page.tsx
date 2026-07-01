import Link from "next/link";

interface Shop2PageProps {
    params: Promise<{ slug: string[] }>
}

export default async function ShopPage({ params }: Shop2PageProps){
    const { slug } = await params;
    const [category, brand, model] = slug;

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
                <b>Shop2</b>
                { slug.map((segment, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span>/</span>
                            <Link href={"/shop/" + segment} className="px-3 py-1 border rounded-full">{segment}</Link>
                        </div>
                ))}
            </div>
            <span>
                <b>Category:</b> {category}
            </span>
            <span>
                <b>Brand:</b> {brand}
            </span>
            <span>
                <b>Model:</b> {model}
            </span>
            <span>
                [DEBUG] Raw segments array: {JSON.stringify(slug)}
            </span>
        </div>
    )
}