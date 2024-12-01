import { FaEye } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";


const CardContainer = () => {
    return (
        <div className="grid grid-cols-2 w-10/12 mx-auto my-12 gap-6">
            <div className="card flex-row justify-between bg-[#F5F4F1]shadow-xl items-center">
                <figure>
                    <img
                        className="w-64"
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
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