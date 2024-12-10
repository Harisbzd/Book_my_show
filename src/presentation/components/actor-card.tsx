import { Link } from "react-router-dom";

interface ActorCardProps {
    name: string;
    moviename: string;
    imgUrl: string;
    path: string;
}

export default function ActorCard(props: ActorCardProps) {
    return (
        <Link to={props.path}>
            <div className="flex items-center justify-center p-4">
                <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg w-44">
                    <div className="w-full h-56 bg-gray-200">
                        <img 
                            className="object-cover w-full h-full" 
                            src={props.imgUrl || "fallback-image-url.jpg"} 
                            alt={props.name} 
                        />
                    </div>
                    <div className="p-2">
                        <div className="text-lg font-semibold text-center text-gray-800 truncate">
                            {props.name}
                        </div>
                        <div className="text-sm text-center text-gray-600 truncate">
                            {props.moviename}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}