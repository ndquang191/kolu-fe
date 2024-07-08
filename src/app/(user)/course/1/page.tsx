import { Checkbox } from "@/components/ui/checkbox";
import { BookIcon } from "lucide-react";

const Question = () => {
	return (
		<div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm dark:bg-gray-950 hover:bg-gray-100 cursor-pointer border-2">
			<div className="flex-1">
				<h3 className="font-medium">What is the capital of France?</h3>
			</div>
			<Checkbox className="shrink-0 w-5 h-5 rounded-full" id="question-1" />
		</div>
	);
};
const page = () => {
	return (
		<div className="container">
			<div className="">
				<div className="flex flex-col justify-between p-6 border-2 border-gray-600">
					<div className="flex items-center space-x-4">
						<BookIcon className="h-8 w-8 text-primary" />
						<h3 className="text-xl font-semibold">Introduction to Web Development</h3>
					</div>
					<div className="mt-3 text-gray-500 dark:text-gray-400">
						Teacher :<span className="font-medium ml-2">Emily Williamson</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-1 mt-4">
				<div className="min-w-[500px] max-w-[800px] my-1">
					<Question />
				</div>

				<div className="min-w-[500px] max-w-[800px] my-1">
					<Question />
				</div>
				<div className="min-w-[500px] max-w-[800px] my-1">
					<Question />
				</div>
			</div>
		</div>
	);
};

export default page;
