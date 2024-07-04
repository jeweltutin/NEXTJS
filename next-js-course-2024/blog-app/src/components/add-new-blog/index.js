'use client'
import { Fragment } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AddNewBlog({ openBlogDialog, setopenBlogDialog, loading, blogFormData, setBlogFormData, handleSaveBlogData, currentEditedBlogID, setCurrentEditedBlogID }) {
    return (
        <Fragment>
            <div>
                <Button onClick={() => setopenBlogDialog(true)} >Add New Blog</Button>
            </div>
            <div>
                <Dialog open={openBlogDialog} onOpenChange={() => {
                    setopenBlogDialog(false);
                    setBlogFormData({
                        title: "",
                        description: ""
                    });
                    setCurrentEditedBlogID(null); 
                }}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>{currentEditedBlogID ? 'Edit Blog' :  'Add New Blog' }</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">Title</Label>
                                <Input id="title" name="title" placeholder="Enter blog title" value={blogFormData.title} 
                                onChange= {(event) =>
                                setBlogFormData({
                                    ...blogFormData,
                                    title: event.target.value,
                                })} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">Description</Label>
                                <Input id="description" name="description" placeholder="Write your description here" value={blogFormData.description} 
                                    onChange={(event) => {
                                        setBlogFormData({
                                            ...blogFormData,
                                            description: event.target.value
                                        }) 
                                    }}  className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button onClick={handleSaveBlogData} type="button">
                                { loading ? "Saving changes" : "Save changes" }
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </Fragment>
    );
}

export default AddNewBlog;