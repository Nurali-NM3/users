import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "./Component/FolderModal/Modal";


function HomePage() {
    const [userList,setUserList] = useState([])
    const [showModel,setShowModel] = useState(false)
    const [editUser,setEditUser] = useState({})
    const [clear,setClear] =useState('')
    useEffect(() =>{
        axios('https://64363d318205915d34eec114.mockapi.io/users')
            .then(res => setUserList(res.data))

    },[])
    console.log(userList, 'ls')
    const handleAddUser = (user) =>{
        setEditUser('')
       if (!!editUser){
           axios.put(`https://64363d318205915d34eec114.mockapi.io/users/${editUser.id}`, user)
               .then(({data}) =>{
                   setUserList(userList.map(user => user.id === data.id ? data : user))
               })

       }else {
           axios.post('https://64363d318205915d34eec114.mockapi.io/users',user)
               .then(res => setUserList([...userList,res.data]))
       }
    }
    const handleEdit = (id) =>{
        setShowModel(true)
        setEditUser(userList.find(user => user.id ===id))
        setClear('')
    }
    const handleDelete =(id) =>{
        axios.delete(`https://64363d318205915d34eec114.mockapi.io/users/${id}`)
            .then(({data}) =>{
                setUserList(userList.filter(user => user.id !== data.id))
            })
    }

    const handleComplete =(id,e)=>{
        setUserList(userList.map((user) => user.id === id? {...user, hire : e.target.checked} : user ))
    }
    const handleClear =()=>{
        setShowModel(false)
        setEditUser('')
    }

return (
    <div>
        <table className={'table table-dark table-hover'}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            {
                userList.map((user, idx) => {
                    return (
                        <tr key={user.id}>
                            <th scope={'row'}>{idx + 1}</th>
                            <td>{
                                <Link to={`/page/${user.id}`}>
                                    {user.name}
                                </Link>}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.job}</td>
                            <td>{user.hire ? 'yes' : 'no'}</td>
                            <td>
                                <button onClick={() => handleEdit(user.id)}>edit</button>
                                <button onClick={() => handleDelete(user.id)}>delete</button>
                            </td>
                        </tr>
                    )
                })

            }
            </tbody>
        </table>
        <button
            className={'btn'}
            onClick={() => setShowModel(!showModel)}>
            add user
        </button>
        {
            showModel &&
            <Modal
                onSubmit={handleAddUser}
                setShowModal={setShowModel}
                editUser={editUser}
                handleClear={handleClear}
                handleComplete={handleComplete}/>
        }
    </div>
)
}

export default HomePage;