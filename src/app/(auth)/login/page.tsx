"use client";
import LoginForm from "@/components/LoginForm";
import { useEffect } from "react";
import bg from "../../public/img/background-gradient.jpg";

export default function Home() {
	async function getData() {
		const res = await fetch("http://localhost:8000/", {
			method: "GET",
		}).then((res) => res.json());

		if (res != null) {
			console.log(res.message);
		}
	}
	useEffect(() => {
		getData();
	}, []);
	return (
		<main className="h-[100vh] flex items-center justify-center bg-banner bg-cover">
			<LoginForm />
		</main>
	);
}
