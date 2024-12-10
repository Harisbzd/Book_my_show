interface HorizontalListProps<T> {
    dataList: T[],
    builder: (dataItem: T) => JSX.Element,
}

function HorizontalList<T>(props: HorizontalListProps<T>) {
    return (
        <div className="flex pb-10 space-x-4 overflow-x-auto">
            {
                props.dataList.map((e) => (
                    props.builder(e)
                ))
            }
        </div>
    );
}

export default HorizontalList;