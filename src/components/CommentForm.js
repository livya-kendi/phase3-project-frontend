import React, { useState } from "react";

function CommentForm({word_id, comments, setComments}) {
    const [formData, setFormData] = useState({
        comment: "",
        user: "",
        word_id: word_id
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/words/${word_id}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            e.target.reset()
            setComments([...comments, data])
        })
    }

    return (
        <div id="comment-form">
            <form onSubmit={e => handleSubmit(e)}>
                <label>Add Comment: </label>
                <input name="comment" type="text" placeholder="Great advice!" onChange={e => handleChange(e)} />
                <label>User: </label>
                <input name="user" type="text" placeholder="Friendly_neighbor100" onChange={e => handleChange(e)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CommentForm