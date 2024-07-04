import connectDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";

import { NextResponse } from "next/server";

const AddNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
})

export async function POST(req) {
    try {
        await connectDB();
        const extractBlogdata = await req.json();
        const { title, description } = extractBlogdata;

        const { error } = AddNewBlog.validate({
            title, description
        })

        if (error) {
            return NextResponse.json({
                success: false,
                message: error.details[0].message
            })
            console.log(error);
        }

        const newlyCreatedBlogItem = await Blog.create(extractBlogdata);
        if (newlyCreatedBlogItem) {
            return NextResponse.json({
                success: true,
                message: 'Blog added successfully!'
            })
           /*  return new NextResponse(
                JSON.stringify({
                    success: true,
                    message: 'Blog added successfully!'
            })) */
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong! Please try again'
            })
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong! Please try again'
        })
    }
}