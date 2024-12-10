
interface MovieListProps<T> {
    datalist: T[],
    builder: (dataItems: T) => JSX.Element,

}


export default  function MovieListHomepage<T>(props: MovieListProps<T>) {
    return (
        <div className="flex">
            {
                props.datalist.map((e)=>(
                    props.builder(e)
                ))
            }
        </div>
    );
}