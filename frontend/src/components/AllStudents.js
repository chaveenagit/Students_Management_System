import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function AllStudents(){

    const [students, setStudents] = useState([]);

    useEffect(() => {
        function getstudents() {
            axios.get("http://localhost:8070/student/").then((res) => {
                console.log(res.data);
                setStudents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getstudents();
    }, [])

    return(
        <div className="container">
            <h1>All Students</h1>
        </div>
    )
}