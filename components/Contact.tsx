'use client'
import { useRouter } from "next/navigation";
import { useState, FormEvent } from 'react'

interface Input {
    Name: string,
    Email: string,
    Phone: string,
    Message: string
}

export default function Contact() {
    const router = useRouter();
    const [post, setPost] = useState<Input>({ Name: "", Email: "", Phone: "", Message: "" });
    const [submitting, setIsSubmitting] = useState(false);

    const Submission = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/form/new", {
                method: "POST",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
            setPost({ Name: "", Email: "", Phone: "", Message: "" }); // Reset the state
        }
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Just Submit your message here and I will get back to you as soon as possible
                </p>
            </div>
            <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={Submission}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-semibold leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="Name"
                                name="Name"
                                type="text"
                                value={post.Name}
                                onChange={(e) => setPost({ ...post, Name: e.target.value })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="Email"
                                name="Email"
                                type="text"
                                value={post.Email}
                                onChange={(e) => setPost({ ...post, Email: e.target.value })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                id="Phone"
                                name="Phone"
                                type="tel"
                                value={post.Phone}
                                onChange={(e) => setPost({ ...post, Phone: e.target.value })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="Message"
                                name="Message"
                                rows={4}
                                value={post.Message}
                                onChange={(e) => setPost({ ...post, Message: e.target.value })}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    )
}
