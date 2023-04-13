import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom/dist";
import {useNavigate} from "react-router-dom";

const Page = () => {
    const params = useParams()

    console.log(params.id)
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
            axios.get(`https://64363d318205915d34eec114.mockapi.io/users/${params.id}`)
                .then(({data}) => {
                    setUser(data)
                }).finally(() => {
                setLoading(false)
            })
            },[params])

    return (

        <div>
            {
                loading ? <h2>loading...</h2> :
                    <div className={'user'}>
                        <img src={user.avatar} alt=""/>
                        <h1>{user.name}</h1>
                    </div>
                    // user.map((user, idx) => (
                    //     <div className="list" key={idx}>
                    //         <img src={user.avatar} alt="img"/>
                    //         <h3>{user.name}</h3>
                    //     </div>
                    // ))
            }
        </div>
    )
}
export default Page;