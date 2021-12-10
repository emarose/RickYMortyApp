import React from "react";

export function Button(props) {
    return (
        <button className={props.class}>{props.content}</button>
    )
}