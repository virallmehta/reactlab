/* eslint-disable react/prop-types */
import React from "react";

export function Message (props) {
    return (<h4 className="bg-success text-white text-center p-2">
        Hello, {props.name}
    </h4>);
}
