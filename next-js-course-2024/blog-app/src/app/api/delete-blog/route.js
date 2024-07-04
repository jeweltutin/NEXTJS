import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";


export async function DELETE(req) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const currentBlogId = searchParams.get('id');

        if (!currentBlogId) {
            return NextResponse.json({
                success: false,
                message: 'Blog ID is required'
            })
        }
        const deleteCurrentBlogID = await Blog.findByIdAndDelete(currentBlogId);
        if (deleteCurrentBlogID) {
            return NextResponse.json({
                success: true,
                message: 'Blog is deleted successfully'
            }) 
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong! please try again'
        })
    }
}
