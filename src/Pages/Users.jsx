import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const usersData = useLoaderData()
    const [singleUser, setSingleUser] = useState(usersData)

    const handleUserDelete = (id) => {
        fetch(`https://coffee-server-eight-iota.vercel.app/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))

        const filter = singleUser.filter(user => user._id !== id)
        setSingleUser(filter)
        
    }

    return (
        <div>
            <div className="overflow-x-auto w-10/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        {
                            <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>creationTime</th>
                            <th>Last SignIn Time</th>
                        </tr>
                        }
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            singleUser.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td><button onClick={() => handleUserDelete(user._id)} className='btn'>X</button></td>
                            </tr>)
                        }
                        {/* row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;