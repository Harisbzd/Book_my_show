
interface FiltersSwitchProps<T> {
    title: string,
    selected: (item: T) => boolean,
    onClick: (message: T) => void,
    name: (name: T) => string,
    filters: T[]
}


function FiltersToggle<T>({ props }: { props: FiltersSwitchProps<T> }) {
    return (
        <div className="flex gap-4">
            <h2 className="text-xl font-semibold">{props.title}</h2>
            <div className="flex gap-2 border rounded-full border-c-midnight-zone">
                {
                    props.filters.map((e) => {
                        const isSelected = props.selected(e);
                        const backgroundColor = isSelected ? 'bg-c-midnight-zone' : 'bg-white';
                        const textColor = isSelected ? 'text-c-light-green' : 'text-black';
                        const name = props.name(e);
                        return <button
                            key={name}
                            onClick={() => props.onClick(e)}
                            className={`py-1 px-6 rounded-full ${backgroundColor} ${textColor}`}>{props.name(e)}</button>
                    })
                }
            </div>
        </div >
    );
}

export default FiltersToggle;