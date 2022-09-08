import React, {useState, useEffect} from "react";

function All() {
    const [advice, setAdvice] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/words")
        .then(resp => resp.json())
        .then(data => setAdvice(data))
    }, [])

    const adviceToDisplay = advice.map(advice => {
        const { user, word, comments } = advice

        const commentSection = comments.map(comment => {
            return (
                <div key={comment.id}>
                    <p>"{comment.comment}" -<em>{comment.user}</em></p>
                </div>
            )
        })

        return (
            <div>
                <h1>"{word}"</h1>
                <h2>- {user}</h2>
                <h3>Comments</h3>
                {comments.length ? commentSection : <p>None</p>}
                <hr />
            </div>
        )
    })

    return (
        <div>
            {adviceToDisplay}
        </div>
    )
}

export default All