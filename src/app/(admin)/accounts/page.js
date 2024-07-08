"use client";
import { Button } from "@/components/ui/button";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
	SelectGroup,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
	DialogHeader,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const Accounts = () => {
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "John Doe",
			email: "john@example.com",
			password: "pw",
			phone: "093000000000",
			role: "Admin",
		},
		{
			id: 2,
			name: "Jane Smith",
			phone: "093000000000",
			email: "jane@example.com",
			password: "pw",

			role: "Editor",
		},
		{
			phone: "093000000000",
			id: 3,
			name: "Bob Johnson",
			password: "pw",
			email: "bob@example.com",
			role: "Viewer",
		},
	]);
	const [editingUser, setEditingUser] = useState(null);
	const handleEdit = (user) => {
		setEditingUser(user);
	};
	const handleSave = (user) => {
		const updatedUsers = users.map((u) => (u.id === user.id ? { ...u, ...user } : u));
		setUsers(updatedUsers);
		setEditingUser(null);
	};
	const handleCancel = () => {
		setEditingUser(null);
	};
	return (
		<div className="w-full pt-5">
			<div className="font-extrabold text-[30px] my-2">Accounts</div>

			<div>
				<Dialog>
					<DialogTrigger asChild className="">
						<Button className="my-4">Create New Account</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md">
						<DialogHeader>
							<DialogTitle>Create New Account</DialogTitle>
							<DialogDescription>
								Enter your information to create a new account.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">Name</Label>
									<Input id="firstName" placeholder="John" />
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="john@example.com" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="phone">Phone</Label>
								<Input id="phone" type="number" placeholder="" />
							</div>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select a role" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="teacher">Teacher</SelectItem>
										<SelectItem value="admin">Admin</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<DialogFooter>
							<Button type="submit" className="ml-auto">
								Create Account
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
			<Separator />
			<Table className="w-full">
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Phone</TableHead>
						<TableHead>Password</TableHead>
						<TableHead>Role</TableHead>
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id}>
							<TableCell>
								{editingUser?.id === user.id ? (
									<Input
										defaultValue={user.name}
										onBlur={(e) =>
											handleSave({ ...user, name: e.target.value })
										}
									/>
								) : (
									user.name
								)}
							</TableCell>
							<TableCell>
								{editingUser?.id === user.id ? (
									<Input
										defaultValue={user.email}
										onBlur={(e) =>
											handleSave({ ...user, email: e.target.value })
										}
									/>
								) : (
									user.email
								)}
							</TableCell>
							<TableCell>
								{editingUser?.id === user.id ? (
									<Input
										defaultValue={user.phone}
										onBlur={(e) =>
											handleSave({ ...user, phone: e.target.value })
										}
									/>
								) : (
									user.phone
								)}
							</TableCell>
							<TableCell>
								{editingUser?.id === user.id ? (
									<Input
										defaultValue={user.password}
										onBlur={(e) =>
											handleSave({ ...user, password: e.target.value })
										}
									/>
								) : (
									user.password
								)}
							</TableCell>
							<TableCell>
								{editingUser?.id === user.id ? (
									<Select
										defaultValue={user.role}
										onValueChange={(value) =>
											handleSave({ ...user, role: value })
										}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Select role" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Admin">Admin</SelectItem>
											<SelectItem value="Teacher">Teacher</SelectItem>
										</SelectContent>
									</Select>
								) : (
									user.role
								)}
							</TableCell>
							<TableCell>
								{editingUser?.id === user.id ? (
									<div className="flex gap-2">
										<Button variant="default" onClick={() => handleSave(user)}>
											Save
										</Button>
										<Button
											variant="destructive"
											onClick={() => handleSave(user)}
										>
											Delete
										</Button>
										<Button variant="outline" onClick={handleCancel}>
											Cancel
										</Button>
									</div>
								) : (
									<Button
										variant="outline"
										size="icon"
										onClick={() => handleEdit(user)}
									>
										<div className="h-4 w-4" />
										<span className="sr-only">Edit</span>
									</Button>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default Accounts;
