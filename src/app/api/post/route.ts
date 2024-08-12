import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/config/mongoose";
import Post from "@/app/config/models/Post";

export async function POST(req: NextRequest) {
    await connectDB();
    try {
        const { title, description } = await req.json();
        const titleIsExist = await Post.findOne({ title });

        console.log({ titleIsExist });

        if (!titleIsExist) {
            const newPost = await Post.create({
                title,
                description
            });
            return NextResponse.json({
                data: newPost,
                message: "Success",
            }, {
                status: 201,
                statusText: "Created"
            })
        }
        return NextResponse.json({
            data: null,
            message: "The title post is already",
        }, {
            status: 400,
            statusText: "Invalid"
        })

    } catch (error) {
        return NextResponse.json({
            data: null,
            message: "Error",
        }, {
            status: 400,
            statusText: "Failed"
        })
    }
}