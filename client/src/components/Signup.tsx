// import { Link } from "react-router-dom";

// export const Signup = () => {
//     async function HandleSignInForm(e) {
//         e.preventDefault();
//         const data = new FormData(e.target);

//         const fullName = data.get("fullName");
//         const username = data.get("username");
//         const email = data.get("email");
//         const password = data.get("password");

//         data.set("fullName", fullName);
//         data.set("username", username);
//         data.set("email", email);
//         data.set("password", password);

//         const res = await fetch("http://localhost:3000/user/signup", {
//             method: "POST",
//             body: JSON.stringify({
//                 fullName,
//                 username,
//                 email,
//                 password,
//             }),
//             headers: {
//                 "Content-type": "application/json",
//             },
//         });
//         if (res.status === 200) {
//             alert("Signed up successfully");
//         } else {
//             alert("Signup failed Check Username or Email");
//         }
//     }

//     return (
//         <>
//             <div className="flex min-h-dvh flex-col justify-center items-center px-6 py-12">
//                 <div className="mx-auto w-full max-w-sm">
//                     <div className="mx-auto w-full max-w-sm">
//                         <h2 className=" text-start text-2xl sm:text-3xl font-bold tracking-normal text-gray-900">
//                             Create your account
//                         </h2>
//                     </div>

//                     <div className="mt-10 mx-auto w-full max-w-sm">
//                         <form className="space-y-6" onSubmit={HandleSignInForm}>
//                             <div>
//                                 <label
//                                     htmlFor="fullname"
//                                     className="block tracking-wide text-sm font-medium leading-none text-gray-900"
//                                 >
//                                     Full Name
//                                 </label>
//                                 <div className="mt-2">
//                                     <input
//                                         id="fullname"
//                                         name="fullname"
//                                         type="text"
//                                         required
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 "
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label
//                                     htmlFor="username"
//                                     className="block tracking-wide text-sm font-medium leading-none text-gray-900"
//                                 >
//                                     Username
//                                 </label>
//                                 <div className="mt-2">
//                                     <input
//                                         id="username"
//                                         name="username"
//                                         type="text"
//                                         required
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 "
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label
//                                     htmlFor="email"
//                                     className="block tracking-wide text-sm font-medium leading-none text-gray-900"
//                                 >
//                                     Email
//                                 </label>
//                                 <div className="mt-2">
//                                     <input
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         autoComplete="email"
//                                         required
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 "
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <div className="flex items-center justify-between">
//                                     <label
//                                         htmlFor="password"
//                                         className="block tracking-wide text-sm font-medium leading-none text-gray-900"
//                                     >
//                                         Password
//                                     </label>
//                                 </div>
//                                 <div className="mt-2">
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         autoComplete="current-password"
//                                         required
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <button
//                                     type="submit"
//                                     className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
//                                 >
//                                     Sign up
//                                 </button>
//                             </div>
//                         </form>

//                         <p className="mt-4 text-center text-md text-gray-500">
//                             Aleady a member?
//                             <Link
//                                 to="/signin"
//                                 className="ml-2 font-semibold tracking-wide text-blue-700 hover:text-blue-600"
//                             >
//                                 Sign in
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye } from "lucide-react"

export const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <div className="flex items-center h-[calc(100dvh-3.5rem)] px-2">
                <Card className="mx-auto h-fit max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Sign Up</CardTitle>
                        <CardDescription>
                            Enter your information to create an account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" placeholder="Max" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Robinson" required />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="username"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="flex items-center">
                                    <Input className="rounded-tr-none rounded-br-none border-r-0" id="password" type={showPassword ? "text" : "password"} />

                                    <div className="h-full px-2 border border-l-0 border-input rounded-tr-md rounded-br-md">
                                        <Eye onClick={() => setShowPassword(!showPassword)} className="h-full w-5 cursor-pointer" />
                                    </div>
                                </div>

                            </div>
                            <Button type="submit" className="w-full">
                                Create an account
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?
                            <Link to="/signin" className="underline underline-offset-1">
                                Sign in
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>

    )
}