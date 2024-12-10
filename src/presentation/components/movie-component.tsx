
interface MovieComponentProps<T> {
    datalist: T[],
    builder: (dataItems: T) => JSX.Element,

}


export default  function MovieComponent<T>(props: MovieComponentProps<T>) {
    return (
        <div >
            {
                props.datalist.map((e)=>(
                    props.builder(e)
                ))
            }
        </div>
    );
}