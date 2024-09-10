'use client'
import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import DetailsModal from "../blog-details-modal";

const initialBlogFormData = {
    title: "",
    description: ""
}

function BlogOverview({ blogList }) {
    const [openBlogDialog, setopenBlogDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
    const [currentEditedBlogID, setCurrentEditedBlogID] = useState(null);
    //console.log(blogFormData);
    const [showModal, setShowModal] = useState(false);
    const [singleBlogData, setSingleBlogData] = useState([]);

    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, [])


    async function handleSaveBlogData() {
        try {
            setLoading(true);
            const apiResponse = currentEditedBlogID !== null ?
                await fetch(`/api/update-blog?id=${currentEditedBlogID}`,{
                    method: "PUT",
                    body: JSON.stringify(blogFormData)
                })
                : await fetch("/api/add-blog", {
                    method: "POST",
                    body: JSON.stringify(blogFormData)
                });
            const result = await apiResponse.json();
            if (result?.success) {
                setBlogFormData(initialBlogFormData);
                setopenBlogDialog(false);
                setLoading(false);
                setCurrentEditedBlogID(null);
                router.refresh();
            }
            //console.log(result);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setBlogFormData(initialBlogFormData);
        }
    }

    function handleEdit(getCurrentBlog){
        //console.log(getCurrentBlog);
        setCurrentEditedBlogID(getCurrentBlog?._id);
        setBlogFormData({
            title: getCurrentBlog?.title,
            description: getCurrentBlog?.description
        });
        setopenBlogDialog(true);
    }

    //console.log(currentEditedBlogID);

    async function handleDeleteBlogByID(getCurrentID) {
        try {

            if (window.confirm("Delete?")) {
                const apiResponse = await fetch(`/api/delete-blog?id=${getCurrentID}`, {
                    method: "DELETE"
                });
                const result = await apiResponse.json();
                if (result?.success) router.refresh();
            }

        } catch (e) {
            console.log(e);
        }
    }

    async function handleShowABlogById(getCurrentID) {
        const apiResponse = await fetch(`/api/get-blog/${getCurrentID}`);
        setShowModal(true);     
        const singleBlog = await apiResponse.json();
        setSingleBlogData(singleBlog);
    }

    return (
        <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
            <AddNewBlog
                openBlogDialog={openBlogDialog}
                setopenBlogDialog={setopenBlogDialog}
                loading={loading}
                setLoading={setLoading}
                blogFormData={blogFormData}
                setBlogFormData={setBlogFormData}
                handleSaveBlogData={handleSaveBlogData}
                currentEditedBlogID={currentEditedBlogID}
                setCurrentEditedBlogID={setCurrentEditedBlogID}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    blogList && blogList.length > 0 ?
                        blogList.map(blogItem =>
                            <Card key={blogItem._id} className="p-5">
                                <CardContent>
                                    <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                                    <CardDescription>{blogItem?.description}</CardDescription>
                                    <div className="mt-5 flex gap-3">
                                        <Button onClick={() => handleEdit(blogItem)} className="btn btn-sm">Edit</Button>
                                        <Button onClick={() => handleDeleteBlogByID(blogItem._id)} variant="destructive">Delete</Button>
                                        <Button onClick={() => handleShowABlogById(blogItem._id)}>Details</Button>
                                        <Link className="bg-green-700 px-5 py-2 text-white rounded" href={`/blogs/${blogItem._id}`}>Show</Link>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                        : <Label className="text-6xl font-extrabold">No Blog found! Please add one</Label>
                }
            </div>
            <DetailsModal setShowModal={setShowModal} showModal={showModal} singleBlogData={singleBlogData} />
        </div>
    );
}

export default BlogOverview;