import Link from 'next/link';
import React from 'react';
import { RiHome2Line } from "react-icons/ri";   

const NotFound = () => {
    return (
        <div className='container mx-auto '>
            <div className='text-center mt-20'>
                <h1 className='text-6xl font-bold text-[#244D3F] mb-4'>404</h1>
            <p className='text-2xl font-semibold mb-2'>Page Not Found</p>
            <p className='text-xl text-[#64748B] mb-4'>Looks like this this friendship link is broken. The page
                <br />
                you're looking for doesn't exist or has been moved </p>

                <Link href={"/"}>
                    <button className='btn btn-ghost bg-[#244D3F] text-white'>
                        <span><RiHome2Line size={20} /></span>
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;