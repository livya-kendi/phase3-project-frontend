import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        word: "",
        user: ""
    })
    const [submissionDetails, setSummissionDetails] = useState(formData)

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/words", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            e.target.reset()
            setSummissionDetails(data)
        })
    }

    //Allow user to be able to delete submission

    function handleDelete(id) {
        fetch(`http://localhost:9292/comments/${id}`, {
            method: "DELETE"
        })
        .then(setSummissionDetails(formData.filter(formData => formData.id !== id)))
    }

    return (
        <div id="submit-form">
            <form onSubmit={e => handleSubmit(e)}>
                <label>Add Your iCare: </label>
                <input name="words" type="text" placeholder="Be nice 💖" onChange={e => handleChange(e)} />
                <label>User: </label>
                <input name="user" type="text" placeholder="What's Your Name?" onChange={e => handleChange(e)} />
                <input type="submit" value="Submit" />

                {submissionDetails.user ? <h1>Thank you {submissionDetails.user} for the iCare! "{submissionDetails.word}" is great advice!</h1> : null}
            </form>
        </div>
    )

    return (
        <div className="comment" key={data}>
            <p>{data} -<em>{user}</em></p>
            <button onClick={() => handleDelete(formData)}>🗑️</button>
        </div>
    )
}

export default Form