import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";



export async function GET(req, { params }){
    //console.log(params.id);
    const { id } = params;
    await connectDB();
    const extractABlogFromDatabase = await Blog.findById(id);
    //console.log(extractABlogFromDatabase);
    return NextResponse.json(extractABlogFromDatabase);
}