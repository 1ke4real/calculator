import React from "react";

export let Result = (props) => {
	return (
		<div className={"flex justify-end m-5"}>
			<span className={"text-white text-7xl"}>{props.result}</span>
		</div>
	)
}