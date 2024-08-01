"use client";
import React from "react";
import { useParams } from "next/navigation";
const ChildBlog: React.FC = () => {
    const params = useParams();
    return (
        <main>
            Child blog {params.blogId}
        </main>
    )
};

export default ChildBlog;