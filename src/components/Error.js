import React, { useEffect, useState } from "react";

function Error() {
    const [kitty, setKitty] = useState("")

    useEffect(() => {
        fetch("https://thatcopy.pw/catapi/rest/")
        .then(resp => resp.json())
        .then(data => setKitty(data.url))
    }, [])

    return (
        <div className="error-container">
            <h1>Page not found</h1>
            {kitty ? <img src={kitty} alt="random cat" className="kitty" /> : null}
        </div>
    )
}

export default Error