import { FaEye } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CardContainer = ({coffee, coffeesData, setCoffeesData}) => {
    const {_id, name, chef, photo, category, taste} = coffee || {}

    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              fetch(`http://localhost:5000/data/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
              })
            }
            const filterData = coffeesData.filter(coffee => coffee._id !== id)
            setCoffeesData(filterData)
          });
    }

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
                    <Link to={`/updateCoffee/${_id}`}><button className="btn join-item bg-[#3C393B] text-xl text-white"><MdModeEdit /></button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item bg-[#EA4744] text-xl text-white"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CardContainer;