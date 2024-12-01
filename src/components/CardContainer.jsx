import { FaEye } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";


const CardContainer = ({coffee}) => {
    const {name, chef, photo, category, taste} = coffee || {}
    return (
        <div className="">
            <div className="card flex-row justify-between bg-[#F5F4F1]shadow-xl items-center">
                <figure>
                    <img
                        className="w-64"
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Shoes!</h2>
                    <h2 className="card-title">Shoes!</h2>
                </div>
                <div className="join join-vertical">
                    <button className="btn join-item bg-[#D2B48C] text-lg text-white"><FaEye /></button>
                    <button className="btn join-item bg-[#3C393B] text-xl text-white"><MdModeEdit /></button>
                    <button className="btn join-item bg-[#EA4744] text-xl text-white"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;