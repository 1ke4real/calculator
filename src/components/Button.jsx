import React from "react";

export let Button = (props) => {
	return (
		<button value={props.number} className={props.style + " text-slate-50 rounded-full h-40 mx-2 text-2xl font-bold"}>{props.number}</button>
	)
}