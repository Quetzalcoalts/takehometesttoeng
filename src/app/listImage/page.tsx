import React, { Suspense } from 'react';
import ListDog from '@/component/listDogPicture';

export default function DogPicture() {
    return (
        <div>
            <Suspense fallback={<div>Loading gambar anjing...</div>}>
                <ListDog />
            </Suspense>
        </div>
    );
}
