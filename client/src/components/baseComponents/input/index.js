import React from "react";

import "./index.css";

const Input = ({
    title,
    hint,
    id,
    mandatory = true,
    val,
    setState,
    err,
    type = "text",
}) => {
    return (
        <>
            <div className="input_title">
                {title}
                {mandatory ? "*" : ""}
            </div>
            {hint && <div className="input_hint">{hint}</div>}
            <input
                id={id}
                className="input_input"
                type={type}
                value={val}
                onInput={(e) => {
                    setState(e.target.value);
                }}
            />
            {err && <div className="input_error">{err}</div>}
        </>
    );
};

export default Input;
