import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const MyToaster = ({type}) => {

    const showToast = (type) => {
        switch (type) {
            case 'success':
                toast.success('Success notification!');
                break;
            case 'error':
                toast.error('Error notification!');
                break;
            case 'warning':
                toast.warning('Warning notification!');
                break;
            default:
                toast('Default notification');
        }
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />


        </>
    )
}

export default MyToaster