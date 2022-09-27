import "./User.css"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


function User() {
  let arr = ['A small DIY air purifier using off-the-shelf components for under $100','Lunar lander type game with computational fluid dynamics','A list of Web & JavaScript related conferences happening in 2018','Implementation of some classic Machine Learning model from scratch and benchmarking against popular ML library']
  let randomVal=Math.floor((Math.random()*arr.length))
  const[userData,setuserData] = useState([])
   let params = useParams();
    useEffect(()=>{
        Value(params.search)
    },[params.search])
    const Value = async(input)=>{
     const result = await  fetch(`https://reqres.in/api/users/${input}`)
        
     const val = await result.json()

     setuserData(val.data)
     
      }
  return (
    <div className="outer">
        <div className="page-content page-container" id="page-content">
        <div className="padding">
            <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                    <div className="card user-card-full">
                        <div className="row m-l-0 m-r-0">
                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                <div className="card-block text-center text-white">
                                    <div className="m-b-25">
                                        <img src={userData.avatar} className="img-radius"
                                            alt="/"/>
                                    </div>
                                    <h6 className="f-w-600">{userData.first_name+" "+userData.last_name}</h6>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="card-block">
                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                    <div className="row">
                                        <div className="row-sm-6">
                                            <p className="m-b-10 f-w-600">Email</p>
                                            <h6 className="text-muted f-w-400">{userData.email}</h6>
                                        </div>
                                    </div>
                                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Description</h6>
                                    <div >
                                        <div>
                                            <p>{arr[randomVal]}</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default User