import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "./ui/card";
import { LockIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const LoginForm = () => {
	return (
		<div className="flex flex-col items-center">
			<Card className="mx-auto max-w-sm shadow-lg">
				<CardContent>
					<form className="space-y-4">
						<CardHeader className="space-y-1">
							<CardTitle className="text-2xl font-bold text-center ">
								Welcome to Kalu
							</CardTitle>
							<CardDescription className="text-center">
								Enter your ID and password to login to your account
							</CardDescription>
						</CardHeader>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="msv">Username</Label>
								<Input id="msv" required type="text" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input id="password" required type="password" />
							</div>
							<Button className="w-full" type="submit">
								Login
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default LoginForm;
