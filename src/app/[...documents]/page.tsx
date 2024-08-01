import _ from "lodash";
import React from "react";
import { notFound } from "next/navigation";

type Params = {
    params: any;
};
const DocumentPage: React.FC<Params> = ({ params }) => {
    if (_.includes(_.get(params, "documents", []), "routing")) {
        if (_.includes(_.get(params, "documents", []), "nested")) {
            return (
                <main>
                    <h1>You can read document of nested routing</h1>
                </main>
            );
        }
        return (
            <main>
                <h1>You can read document of routing</h1>
            </main>
        )

    }
    if (_.get(params, "documents.length", 0) > 1) {
        notFound();
    }
    return <main>Documents pages</main>;
};

export default DocumentPage;
