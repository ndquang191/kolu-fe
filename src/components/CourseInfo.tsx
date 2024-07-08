import { BookIcon } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const CourseInfo = () => {
	return (
		<Card className="p-6 bg-card text-card-foreground hover:border-2 cursor-pointer">
			<div className="flex items-center justify-between">
				<div className="space-y-1">
					<h3 className="text-lg font-medium">Introduction to Web Development</h3>
					<p className="text-sm text-muted-foreground">Taught by John Doe</p>
				</div>
				<div className="text-right">
					<div className="text-2xl font-bold">75%</div>
					<p className="text-sm text-muted-foreground">Completed</p>
				</div>
			</div>
			<Progress value={75} className="mt-4 h-2" />
		</Card>
	);
};

export default CourseInfo;
