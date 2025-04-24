"use client"
import React, { Suspense } from "react";
import ListDog from "@/component/listDogPicture";

const DogPicture = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ListDog />
            </Suspense>
        </div>
    )
}

export default DogPicture
