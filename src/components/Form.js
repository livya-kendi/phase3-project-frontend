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
        fetch("https://icare-kenya.herokuapp.com/words", {
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
}

export default Form