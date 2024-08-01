"use client";
import _ from "lodash";
import React from 'react';
import { notFound, useParams } from "next/navigation";
const ReviewDetail: React.FC = () => {
    const arrId = [1, 2, 3];
    const params = useParams();

    if (!_.includes(arrId, Number(_.get(params, "reviewId", "")))) {
        return notFound();
    };

    return (
        <main>
            Review Detail Page {params.reviewId}
        </main>
    )
}

export default ReviewDetail;