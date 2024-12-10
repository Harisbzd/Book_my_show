
interface MovieListProps<T> {
    datalist: T[],
    builder: (dataItems: T) => JSX.Element,

}


export default  function MovieList<T>(props: MovieListProps<T>) {
    return (
        <div className="grid w-full grid-cols-6">
            {
                props.datalist.map((e)=>(
                    props.builder(e)
                ))
            }
        </div>
    );
}