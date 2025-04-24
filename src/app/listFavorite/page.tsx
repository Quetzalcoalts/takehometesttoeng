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
            console.log('Ini muncul di terminal:', stored);
        }

    }, []);
    if (decodedImages.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Tidak Ada Favorite</h1>
                <button onClick={() => window.history.back()} className="text-blue-500 hover:underline text-normal">Kembali ke Beranda</button>
            </div>
        )
    }
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
            <div className="bg-white mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {decodedImages.map((url: string, idx: number) => (
                    <Image key={url} src={url} alt={`Favorite ${idx + 1}`} className="w-full h-72 object-cover rounded shadow transition-transform duration-300 ease-in-out hover:scale-105" width={100}
                        height={100} />
                ))}
            </div>
        </div>
    )
}

export default ListFavorite
