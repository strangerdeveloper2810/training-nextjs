import { Metadata } from "next";
import React from "react";

interface Props {
    params: {
        blogId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const blogName = await new Promise(resolved => {
        setTimeout(() => {
            resolved("Frontend")
        }, 200);
    });

    return {
        title: {
            absolute: `Blog ${blogName}`
        },
        description: `Blog Description ${blogName}`,
    }
};
const ChildBlog: React.FC<Props> = ({ params }) => {

    return (
        <main>
            Child blog {params.blogId}
        </main>
    )
};

export default ChildBlog;