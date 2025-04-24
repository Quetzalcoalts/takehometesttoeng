"use client";
import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import Image from 'next/image';

const ListFavorite = () => {
    const [decodedImages, setDecodedImages] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("clickedDogImages");
        if (stored) {
            setDecodedImages(JSON.parse(stored));
        }
    }, []);
    return (
        <div className="container mx-auto px-14 min-h-screen mb-10 w-full">
            <div className='flex-row flex mt-4 justify-between'>
                <div className='flex items-center mr-6'>
                    <button className='flex items-center mr-6' onClick={() => window.history.back()}>
                        <IoArrowBackSharp />
                        <p className='ml-2'>Back</p>
                    </button>
                    <p className="text-lg font-semibold">List Ras Favorite</p>
                </div>
            </div>
            <div className="bg-white mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {decodedImages.map((url: string, idx: number) => (
                    <Image key={url} src={url} alt={`Favorite ${idx + 1}`} className="w-full h-72 object-cover rounded shadow" width={100}
                        height={100} />
                ))}
            </div>
        </div>
    )
}

export default ListFavorite
