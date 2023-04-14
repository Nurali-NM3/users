import React, {useState} from "react";
import './Modal.css'
import Input from "./Input";

const Modal = ({setShowModal ,onSubmit,editUser,handleComplete}) =>{
    const [user,serUser] = useState(editUser || {})

    const handleSubmit =(e)=>{
        e.preventDefault()
        onSubmit(user)
        setShowModal(false)
        console.log(user)
    }

    return(
        <div className={'modal'}>
            <div className={'modal-inner'}>
                <form action="" onSubmit={handleSubmit} >
                    <button
                    className={'btn'}
                    onClick={() => setShowModal(false)}>
                        X
                    </button>
                    <div>
                        <Input
                            value={user.name}
                            label={'name'}
                            id={'name'}
                            placeHolder={'enter name'}
                            onChange={(e) =>serUser({...user, name: e.target.value})}/>
                    </div>
                    <Input
                        value={user.email}
                        label={'email'}
                        id={'email'}
                        placeHolder={'enter email'}
                        onChange={(e) =>serUser({...user, email: e.target.value})}/>
                    <Input
                        value={user.job}
                        label={'job'}
                        id={'job'}
                        placeHolder={'enter job'}
                        onChange={(e) =>serUser({...user, job: e.target.value})}/>


                  <div className="wr-check-btn">
                      <label
                          className={'label'}
                      >
                          <input
                              onChange={(e) =>handleComplete(user.id,e)}
                              type="checkbox"
                              checked={user.hire}
                              className={'checkbox'}
                              autoComplete={'off'}/>
                          <span className={'fake'}></span>
                          <span className={'text'}>Hired</span>
                      </label>
                      <button
                          type={"submit"}
                          className={'btn btn-outline-dark'}
                          onClick={handleSubmit}>
                          {!editUser ? 'save' : 'edit'}
                      </button>
                  </div>
                </form>
            </div>
        </div>
    )
}

export default Modal