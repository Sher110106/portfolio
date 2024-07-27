import { connectTodb } from "@/utils/database";
import Post from "@/models/post";

interface Input {
    Name: string,
    Email: string,
    Phone: string,
    Message: string
}

export const POST = async (request: Request) => {
    const { Name, Email, Phone, Message } = await request.json() as Input;
    try {
        await connectTodb();
        const newPost = new Post({ Name, Email, Phone, Message });
        await newPost.save();
        return new Response(JSON.stringify(newPost), { status: 201 });
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}

