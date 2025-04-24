'use client';
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { IoArrowBackSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";

const ListDog = () => {
    const searchParams = useSearchParams();
    const query = searchParams?.get('query') || '';
    const [images, setImages] = useState<string[]>([])
    const [error, setError] = useState('');
    const [clickedImages, setClickedImages] = useState<string[]>([]);
    const router = useRouter();

    const handleImageClick = (url: string) => {
        setClickedImages((prev) => [...prev, url]);
    };

    const handleNavigateToFavorites = () => {
        localStorage.setItem("clickedDogImages", JSON.stringify(clickedImages));
        router.push('/listFavorite');
    };

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const res = await fetch(`/api/listDog?query=${encodeURIComponent(query)}`);
                const data = await res.json();
                if (!res.ok) {
                    setError(data.message || 'Terjadi kesalahan saat memuat data');
                    setImages([]);
                    return;
                }
                setImages(data.message);
                setError('');
            } catch (err) {
                setError('Gagal terhubung ke server');
                console.error(err);
            }
        }

        fetchDogs()
    }, [])

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h1>
                <p className="text-lg text-gray-700 mb-6">{error}</p>
                <a href="/" className="text-blue-500 hover:underline">Kembali ke Beranda</a>
            </div>
        );
    }
    return (
        <div className="container mx-auto px-14 min-h-screen mb-10">
            <div className='flex-row flex mt-4 justify-between'>
                <div className='flex items-center mr-6'>
                    <button className='flex items-center mr-6' onClick={() => window.history.back()}>
                        <IoArrowBackSharp />
                        <p className='ml-2'>Back</p>
                    </button>
                    <p className="text-lg font-semibold">Pencarian Untuk Ras "{query}"</p>
                </div>
                <button className='mr-2 flex items-center' onClick={handleNavigateToFavorites}>
                    <FcLike />
                    <p className='ml-2'>Like</p>
                </button>
            </div>
            <div className="bg-white mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((url, idx) => (
                    <Image
                        onClick={() => handleImageClick(url)}
                        key={idx}
                        src={url}
                        alt={`Dog ${idx + 1}`}
                        className="w-full h-72 object-cover rounded shadow transition-transform duration-300 ease-in-out hover:scale-105"
                        width={100}
                        height={100}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListDog

