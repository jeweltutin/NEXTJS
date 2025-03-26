"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust as per your project
import { toast } from "sonner"; // Assuming you use Sonner for notifications

// Validation Schema
const slideSchema = yup.object().shape({
    name: yup.string().required("Slide name is required"),
    image: yup.mixed().required("Image is required"),
    //url: yup.string().url("Enter a valid URL").required("URL is required"),
    url: yup.string().url("Enter a valid URL"),
    // priority: yup.number().typeError("Priority must be a number").min(1, "Must be at least 1"),
    isActive: yup.boolean(),
});

export default function AddSlide() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Check for token and user in sessionStorage
    useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");
        const userData = JSON.parse(sessionStorage.getItem("user"));
        if (jwt) {
            setToken(jwt);
            setUser(userData);
        } else {
            router.push("/sign-in");
        }
    }, [router]);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(slideSchema),
        defaultValues: { isActive: true }, // Default slide as active
    });

    // Watch for image changes
    const imageFile = watch("image");

    // Handle image preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValue("image", file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Form Submission
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("image", data.image);
            formData.append("url", data.url);
            formData.append("priority", data.priority);
            formData.append("isActive", data.isActive);

            // Send data to backend
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/slide`, {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });

            if (!response.ok) {
                throw new Error("Failed to create slide");
            }

            toast.success("Slide created successfully!");

            // Wait a short delay before redirecting to ensure the toast is visible
            setTimeout(() => {
                router.push("/dx-admin/slider"); // Redirect to slide list
            }, 1000);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create New Slide</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block font-medium">Slide Name</label>
                    <input {...register("name")} className="w-full p-2 border rounded" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block font-medium">Slide Image</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                    {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 w-40 h-24 object-cover rounded" />}
                </div>

                {/* URL */}
                <div>
                    <label className="block font-medium">Slide URL</label>
                    <input {...register("url")} className="w-full p-2 border rounded" />
                    {errors.url && <p className="text-red-500 text-sm">{errors.url.message}</p>}
                </div>

                {/* Priority */}
                <div>
                    <label className="block font-medium">Priority</label>
                    <input type="number" {...register("priority")} className="w-full p-2 border rounded" placeholder="Priority must be a number" />
                    {errors.priority && <p className="text-red-500 text-sm">{errors.priority.message}</p>}
                </div>

                {/* Active Toggle */}
                <div className="flex items-center gap-2">
                    <input type="checkbox" {...register("isActive")} />
                    <label className="font-medium">Active</label>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Create Slide</Button>
            </form>
        </div>
    );
}
