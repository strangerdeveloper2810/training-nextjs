import _ from "lodash";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/config/mongoose";
import Post from "@/app/config/models/Post";

export async function GET(
    req: NextRequest,
    context: { params: { id: string } }
) {
    await connectDB();
    try {
        const id = _.get(context, "params.id", "");
        const post = await Post.findById(id);

        if (!post) {
            return NextResponse.json(
                {
                    data: null,
                    message: "Post not found",
                },
                {
                    status: 404, // Thay đổi mã trạng thái thành 404
                    statusText: "Not Found",
                }
            );
        }

        return NextResponse.json(
            {
                data: post,
                message: "Success",
            },
            {
                status: 200,
                statusText: "OK",
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                data: null,
                message: "Internal Server Error",
            },
            {
                status: 500,
                statusText: "Failed",
            }
        );
    }
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
    await connectDB();

    try {
        const { title, description } = await req.json();
        const id = _.get(context, "params.id", "");

        // Tìm post theo ID
        const post = await Post.findById(id);
        if (!post) {
            return NextResponse.json(
                { data: null, message: "Post not found" },
                { status: 404 }  // Sử dụng mã lỗi 404 cho post không tồn tại
            );
        }

        // Kiểm tra xem title đã tồn tại cho bài post khác chưa
        const isTitleDuplicated = await Post.findOne({ title, _id: { $ne: id } });
        if (isTitleDuplicated) {
            return NextResponse.json(
                { data: null, message: "The title post is duplicated" },
                { status: 400 }  // Sử dụng mã lỗi 400 cho dữ liệu không hợp lệ
            );
        }

        // Cập nhật post nếu title không bị trùng lặp
        const updatedPost = await Post.findByIdAndUpdate(id, { title, description }, { new: true });
        return NextResponse.json(
            { data: updatedPost, message: "Update success" },
            { status: 200 }  // Sử dụng mã lỗi 200 cho cập nhật thành công
        );

    } catch (error) {
        console.error("Update post error:", error);
        return NextResponse.json(
            { data: null, message: "Internal Server Error" },
            { status: 500 }  // Sử dụng mã lỗi 500 cho lỗi server
        );
    }
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
    await connectDB();
    try {
        const id = _.get(context, "params.id", "");
        // Tìm và xóa bài post theo ID
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return NextResponse.json(
                { data: null, message: "Post not found" },
                { status: 404 }  // Sử dụng mã lỗi 404 cho không tìm thấy bài post
            );
        }

        return NextResponse.json(
            { data: deletedPost, message: "Delete success" },
            { status: 200 }  // Sử dụng mã lỗi 200 cho xóa thành công
        );

    } catch (error) {
        return NextResponse.json(
            { data: null, message: "Internal Server Error" },
            { status: 500 }  // Sử dụng mã lỗi 500 cho lỗi server
        );
    }
}