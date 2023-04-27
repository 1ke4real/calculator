import React from "react";
import {Button} from "./components/Button";
import {Result} from "./components/Result";
export const App = () => {
	let result = 0
	let value1
	let value2
	let operation

	return (
		<>
			<div className={"absolute bottom-0 left-0 w-full"}>
				<Result result={result} />
				<div className="flex row-1 my-5">
					<Button
						number={"AC"}
						style={"bg-zinc-400 w-full hover:bg-zinc-300"}/>

					<Button
						number={"+/-"}
						style={"bg-zinc-400 w-full hover:bg-zinc-300"}/>
					<Button
						number={"%"}
						style={"bg-zinc-400 w-full hover:bg-zinc-300"}/>

					<Button
						number={"/"}
						style={"bg-amber-500 w-full hover:bg-amber-400"}/>

				</div>
				<div className="flex row-1 my-5" >
					<Button
						number={7}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>

					<Button
						number={8}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={9}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={"x"}
						style={"bg-amber-500 w-full hover:bg-amber-400"}/>
				</div>
				<div className="flex row-1 my-5" >
					<Button
						number={4}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={5}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={6}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={"-"}
						style={"bg-amber-500 w-full hover:bg-amber-400"}/>
				</div>
				<div className="flex row-1 my-5" >
					<Button
						number={1}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={2}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={3}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={"+"}
						style={"bg-amber-500 w-full hover:bg-amber-400"}/>
				</div>
				<div className="flex row-1 my-5" >
					<Button
						number={0}
						style={"bg-zinc-700 w-full hover:bg-zinc-600"}/>
					<Button
						number={","}
						style={"bg-zinc-700 w-[50%] hover:bg-zinc-600"}/>
					<Button
						number={"="}
						style={"bg-amber-500 w-[50%] hover:bg-amber-400 "}/>
				</div>
			</div>
		</>
	)
}