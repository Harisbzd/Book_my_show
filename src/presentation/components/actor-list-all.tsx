interface ActorListProps<T> {
    datalist: T[]
    builder: (dataItems: T) => JSX.Element,
}


export default function ActorList<T>(props: ActorListProps<T>) {
    return(
        <div className="overflow-x-auto" style={{ whiteSpace: "nowrap" }}>

        <div className="flex" style={{ height: '24rem' }}>
            {
                props.datalist.map((e) => (
                    props.builder(e)
                ))
            }
        </div>
    </div>
    )
    
}