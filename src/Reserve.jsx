import React, { useState } from 'react'
import './reserve.css'

function Reserve() {
    const [values, setValues] = useState({
        phonenumber: "",
        email: "",
        topic: "",
        date: "",
        pNmae: "",
        sName: ""
    });

    const handlePN = (event) => {
        setValues({ ...values, phonenumber: event.target.value })
    }
    const handleEmail = (event) => {
        setValues({ ...values, email: event.target.value })
    }
    const handleTopic = (event) => {
        setValues({ ...values, topic: event.target.value })
    }
    const handleDate = (event) => {
        setValues({ ...values, date: event.target.value })
    }
    const handlepName = (event) => {
        setValues({ ...values, pName: event.target.value })
    }
    const handlesName = (event) => {
        setValues({ ...values, sName: event.target.value })
    }

    return (
        <div id='Reserve'>
            <h1>hello</h1>
            <input
                value={values.phonenumber}
                name="phonenumber"
                placeholder='Phone Number'
                onChange={handlePN} />
            <input
                value={values.email}
                name="email"
                placeholder='Email'
                onChange={handleEmail} />
            <input
                value={values.topic}
                name="topic"
                placeholder='Subject'
                onChange={handleTopic} />
            <input
                value={values.parentname}
                name="pname"
                placeholder='Parent Name'
                onChange={handlepName} />
            <input
                value={values.studentname}
                name="sname"
                placeholder='Student Name'
                onChange={handlesName} />
        </div>
    )
}

export default Reserve