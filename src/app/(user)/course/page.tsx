import CourseInfo from "@/components/CourseInfo";
import { Separator } from "@/components/ui/separator";
import { Badge, BadgeCheck } from "lucide-react";
import { ZCOOL_QingKe_HuangYou } from "next/font/google";
import React from "react";

const CourseList = () => {
	return (
		<div className=" w-full">
			<div className="flex text-lg font-extrabold ml-5 my-3">
				<Badge className="mr-2" />
				On Going
			</div>
			<div className="flex flex-wrap gap-3 ">
				<CourseInfo />
				<CourseInfo />
				<CourseInfo />
				<CourseInfo />
			</div>
			<Separator className="mt-4" />
			<div className="flex text-lg font-extrabold ml-5 my-3">
				<BadgeCheck className="mr-2" />
				Completed
			</div>
			<div className="flex flex-wrap gap-3 ">
				<CourseInfo />
				<CourseInfo />
				<CourseInfo />
				<CourseInfo />
			</div>
		</div>
	);
};

export default CourseList;
