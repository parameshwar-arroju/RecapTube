// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export const Signin = () => {
//     const [redirect, setRedirect] = useState(false);

//     const navigate = useNavigate();

//     async function HandleSignInForm(e) {
//         e.preventDefault();
//         const data = new FormData(e.target);
//         const username = data.get("username");
//         const password = data.get("password");

//         data.set("username", username);
//         data.set("password", password);
//         const res = await fetch("http://localhost:3000/user/signin", {
//             method: "POST",
//             body: JSON.stringify({
//                 username,
//                 password,
//             }),
//             headers: {
//                 "Content-type": "application/json",
//             },
//         });
//         if (res.ok) {
//             const response = await res.json();
//             localStorage.setItem("token", response.token);
//             localStorage.setItem("author", response.username);
//             setRedirect(true);
//         } else {
//             alert("Wrong Credentials");
//         }
//     }

//     if (redirect) {
//         navigate("/");
//     } else {
//         return (
//             <>
//                 <div className="flex min-h-dvh flex-col justify-center items-center px-6 py-12">
//                     <div className="mx-auto w-full max-w-sm border-green-600">
//                         <div className="mx-auto w-full max-w-sm">
//                             <h2 className=" text-start text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
//                                 Sign in to your account
//                             </h2>
//                         </div>

//                         <div className="mt-10 mx-auto w-full max-w-sm">
//                             <form
//                                 className="space-y-6"
//                                 onSubmit={HandleSignInForm}
//                             >
//                                 <div>
//                                     <label
//                                         htmlFor="username"
//                                         className="block tracking-wide text-sm font-medium leading-6 text-gray-900"
//                                     >
//                                         Email or Username
//                                     </label>
//                                     <div className="mt-2">
//                                         <input
//                                             id="username"
//                                             name="username"
//                                             type="username"
//                                             autocomplete="username"
//                                             required
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 "
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div className="flex items-center justify-between">
//                                         <label
//                                             htmlFor="password"
//                                             className="block tracking-wide text-sm font-medium leading-6 text-gray-900"
//                                         >
//                                             Password
//                                         </label>
//                                     </div>
//                                     <div className="mt-2">
//                                         <input
//                                             id="password"
//                                             name="password"
//                                             type="password"
//                                             autocomplete="current-password"
//                                             required
//                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <button
//                                         type="submit"
//                                         className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
//                                     >
//                                         Sign in
//                                     </button>
//                                 </div>
//                             </form>

//                             <p className="mt-10 text-center text-md text-gray-500">
//                                 Not a member?
//                                 <Link
//                                     to="/signup"
//                                     className="ml-2 font-semibold tracking-wide text-blue-700 hover:text-blue-600"
//                                 >
//                                     Sign up
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// };

import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Eye } from "lucide-react"

export const Signin = () => {

    // const [redirect, setRedirect] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    async function HandleSignInForm(e: any) {
        e.preventDefault();
        const data = new FormData(e.target);
        const username = data.get("username");
        const password = data.get("password");

        // data.set("username", username);
        // data.set("password", password);
        const res = await fetch("http://localhost:3000/user/signin", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        if (res.ok) {
            const response = await res.json();
            localStorage.setItem("token", response.token);
            localStorage.setItem("author", response.username);
            // setRedirect(true);
        } else {
            alert("Wrong Credentials");
        }
    }

    return (
        <>
            <div className="flex h-[calc(100dvh-3.5rem)] items-center justify-center px-2">
                <Card onSubmit={HandleSignInForm} className="mx-auto h-fit max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center tracking-normal">Signin</CardTitle>
                        <CardDescription>
                            Enter your email below to Signin to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="@username"
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
                                Signin
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to="/signup" className="underline underline-offset-1">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </>

    )
}
