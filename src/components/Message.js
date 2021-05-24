import React from 'react'

const Message = ({ msg, bgColor }) => {
    return (
        <div
        style={{
            backgroundColor: bgColor,
            color: "#FFF",
            fontWeight: "bold",
            marginBottom: "1rem",
            padding: "1rem",
            textAlign: "center",
        }}
    >
        <p>{msg}</p>
    </div>
    )
}

export default Message
