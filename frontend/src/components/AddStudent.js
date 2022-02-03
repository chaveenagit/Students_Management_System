import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");


    function sendData(e){
        e.preventDefault();
        
        const newStudent = {
            name,
            age,
            gender,
            address
        }

        axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
            alert("Student Added")
            setName("");
            setAge("");
            setGender("");
            setAddress("");

        }).catch((err)=>{
            alert(err)
        })

    }


    return (

        <div className="container">
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label for="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Student Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                </div>

                <div className="mb-3">
                    <label for="age" className="form-label">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}/>
                </div>

                <div className="mb-3">
                    <label for="gender" className="form-label">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}/>
                </div>

                <div className="mb-3">
                    <label for="address" className="form-label">Student Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Student Address"
                    onChange={(e)=>{
                        setAddress(e.target.value);
                    }}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
