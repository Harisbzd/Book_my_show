import { Link } from "react-router-dom";

interface MovieCardProps {
    name: string;
    date: string;
    rating: number;
    imgUrl: string;
    path: string;
}

export default function MovieCard(props: MovieCardProps) {
    return (
        <Link to={props.path} className="group">
            <div className="p-2 transition-all duration-200 transform group-hover:scale-105" style={{ height: '28rem' }}>
                <div className="bg-white rounded-t-lg w-44 h-62">
                    <img className="rounded-t-lg" src={props.imgUrl} alt="" />
                </div>
                <div className="relative bg-white rounded-b-lg shadow-lg w-44 border-x-2" style={{ height: '8rem' }}>
                    <div className="absolute w-10 h-10 bg-black rounded-full" style={{ top: '-20px', left: '7px' }}>
                        <i className="absolute text-white top-2 end-2.5">{props.rating.toFixed(1)}</i>
                    </div>
                    <div className="absolute" style={{ top: '26px', left: '11px' }}>
                        <i className="block font-semibold truncate" style={{ maxWidth: '90%' }}>{props.name}</i>
                        <i className="block truncate" style={{ maxWidth: '90%' }}>{props.date}</i>
                    </div>
                </div>
            </div>
        </Link>
    );
}