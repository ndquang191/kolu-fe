import { columns, Students } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Students[]> {
	// Fetch data from your API here.
	return [
		{
			id: 20351060669,
			// amount: number;
			// name: "pending" | "processing" | "success" | "failed";
			class: "62PM1",
			name: "Nguyễn Duy Quang",
			email: "2051060669@e.tlu.edu.vn",
			password: "quangbeo",
		},
		{
			id: 20351060670,
			// amount: number;
			// name: "pending" | "processing" | "success" | "failed";
			class: "62TH1",
			name: "Dương Quốc Anh",
			email: "2051033333@e.tlu.edu.vn",
			password: "quangbeo",
		},
		// ...
	];
}

async function StudentsList() {
	const data = await getData();

	return (
		<div className="w-full pt-5">
			<div className="font-extrabold text-[30px] my-2">Students</div>

			<div className="mx-auto py-10">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}

export default StudentsList;
