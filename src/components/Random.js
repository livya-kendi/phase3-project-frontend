import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Random() {
    const [wordObj, setWordObj] = useState({
        id: 0,
        word: "",
        user: "",
        comments: [],
        created_at: ""
    })
    const [comments, setComments] = useState([])

    function fetchAdvice() {
        fetch(`http://localhost:9292/words/random`)
        .then(resp => resp.json())
        .then(data => {
            setWordObj(data)
            setComments(data.comments)
        })
    }

    const { word, user, id } = wordObj

    useEffect(fetchAdvice, [])

    return (
        <div>
            <button onClick={fetchAdvice}>Click Me for New Advice!</button>
            <h1>"{word}"</h1>
            <h2> - {user} </h2>
            <hr />
            <Comment comments={comments} setComments={setComments} />
            <CommentForm word_id={id} comments={comments} setComments={setComments}/>
        </div>
    )
}

export default Random