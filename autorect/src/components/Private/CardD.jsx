export function CardD({ title, quantity, rest, values, colorv }) {
    return (
        <>
            <div className="rounded-xl card flex-col p-6">
                <h1 className="text-gray-400 text-base font-bold">{title}</h1>
                <p className="text-white text-3xl font-extrabold mt-2">{quantity}{rest}</p>
                <p className={colorv}>{values}</p>
            </div>
        </>

    )
}