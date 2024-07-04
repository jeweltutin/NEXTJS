import connectDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const editBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
})


export async function PUT(req) {
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

        const { title, description } = await req.json();

        const { error } = editBlog.validate({
            title,
            description
        })


        const updateCurrentBlogID = await Blog.findByIdAndUpdate({
            _id: currentBlogId
        }, { title, description }, { new: true });

        if (updateCurrentBlogID) {
            return NextResponse.json({
                success: true,
                message: 'Blog is updated successfully'
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong! please try again'
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