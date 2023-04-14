import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom/dist";
import './Page.css'

const Page = () => {
    const params = useParams()

    console.log(params.id)
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
            axios.get(`https://64363d318205915d34eec114.mockapi.io/users/${params.id}`)
                .then(({data}) => {
                    setUser(data)
                    console.log(data)
                }).finally(() => {
                setLoading(false)
            })
            },[params])

    return (

        <div>
            {
                loading ? <h2>loading...</h2> :
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <div className="box">
                                <img className={'page-img'} src={user.avatar} alt=""/>
                                <h1>{user.name}</h1>
                                <h3>{user.job}</h3>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box box1">
                                <h3>{user.username}</h3>
                                <h3>{user.email}</h3>
                                <h3>{user.hire}</h3>
                                <p>{user.description}</p>
                            </div>
                        </div>
                    </div>

            }
        </div>
    )
}
export default Page;