import React from "react";

function Comment({comments, setComments}) {
    function handleDelete(id) {
        fetch(`http://localhost:9292/comments/${id}`, {
            method: "DELETE"
        })
        .then(setComments(comments.filter(comment => comment.id !== id)))
    }

    const commentsToDisplay = comments.map(commentObj => {
        const {comment, user, id} = commentObj

        return (
            <div className="comment" key={id}>
                <p>{comment} -<em>{user}</em></p>
                <button onClick={() => handleDelete(id)}>🗑️</button>
            </div>
        )
    })

    return (
        <div>
            <h3>Comments</h3>
            {commentsToDisplay}
        </div>
    )
}

export default Comment