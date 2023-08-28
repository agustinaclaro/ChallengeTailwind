import { Link } from "react-router-dom";

export const Product = (props) => {
  return (
    <div className="">
      <div
        key={props.id}
        className="flex justify-between shadow-md rounded-xl px-1  py-1"
      >
        <div className="flex">
          <Link to={`/product/${props.id}`}>
            <img
              className="w-60 h-30 p-px-5"
              src={props.picture}
              alt={props.description}
            ></img>
          </Link>
        </div>
        <div className="flex flex-col text-left pt-9">
          <p className="font-medium text-3xl pb-4">${props.price} </p>
          <p className="font-medium text-3xl">{props.title}</p>
        </div>
        <div className="m-6 flex">
          <p className=" text-right text-gray-700 pt-9">{props.location}</p>
          <p className=" text-right text-gray-700 pt-9">{props.id}</p>
        </div>
      </div>
    </div>
  );
};
