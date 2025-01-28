import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from 'react'
import { deleteBookApi, getCardsApi, postBook } from '@/http/api'
import { Button } from '@/components/ui/button'
import { CustomModal } from '../../CustomModal'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from '@/components/ui/input'
import { useFormik } from 'formik'
import { ProductValidation } from '@/components/Validations'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

const ProductTable = () => {
    const queryClient = useQueryClient();

    const [openModal, setOpenModal] = useState(false)
    const openModalHandler = () => {
        setOpenModal(true)
    }
    const { data: bookData, isLoading: bookIsLoading, isError: bookIsErr, error: bookErr } = useQuery({
        queryKey: ['books'],
        queryFn: () => getCardsApi('/data')
    })


    const tableHeader = [{
        id: 1,
        name: 'Id'
    },
    {
        id: 2,
        name: 'MainImage'
    },
    {
        id: 3,
        name: 'HoverImage'
    },
    {
        id: 4,
        name: 'category'
    },
    {
        id: 5,
        name: 'price'
    },
    {
        id: 6,
        name: 'discountPrice'
    },
    {
        id: 7,
        name: 'pricePerCent'
    },
    {
        id: 8,
        name: 'title'
    },
    {
        id: 9,
        name: 'Action'
    }
    ]
    const { mutate, isPending } = useMutation({
        mutationKey: ['addBook'],
        mutationFn: (data) => postBook('/data', data),
        onSuccess: () => {
            queryClient.refetchQueries(['books'])
            toast.success('Product Added Successfully')
            setOpenModal(false)
            formik.resetForm()
        }
    })



    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            discountPrice: '',
            pricePerCent: '',
            mainImage: '',
            hoverImage: ''
        },
        validationSchema: ProductValidation,
        onSubmit: async (value) => {
            const payload = {
                id: uuidv4(),
                title: value.title,
                price: value.price,
                discountPrice: value.discountPrice,
                pricePerCent: value.pricePerCent,
                mainImage: value.mainImage,
                hoverImage: value.hoverImage
            }
            mutate(payload)
        }
    })


    const { mutate: deleteMutate, isPending: deleteLoading } = useMutation({
        mutationKey: 'deleteBook',
        mutationFn: (id) => deleteBookApi('/data', id),
        onSuccess: () => {

            toast.success('Product Deleted Successfully');
            queryClient.refetchQueries(['books'])
        },
        onError: (error) => {
            toast.error(`Error deleting product: ${error.message}`);
        },
    });
    const handleDelete = (id) => {
        deleteMutate(id)
    }


    if (bookIsErr) return <div>{bookErr.message}</div>





    return (
        <div className='container mx-auto'>

            <div className='my-20'>
                <div className='max-w-5xl w-full'>
                    <CustomModal open={openModal} setOpen={setOpenModal} >
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                formik.handleSubmit()
                            }}
                            className='p-4 flex flex-col gap-4'>
                            <div>
                                <Label className='mb-2'>Product Title</Label>
                                <Input
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    className="outline-none outline-offset-0   
                                focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent
                                " placeholder='please add product title' name="title" />
                                {formik.errors.title && formik.touched.title && <p className='text-red-600'>{formik.errors.title}</p>}
                            </div>
                            <div>
                                <Label className='mb-2'>Product price</Label>
                                <Input
                                    value={formik.values.price}
                                    onChange={formik.handleChange}

                                    className="outline-none outline-offset-0   
                                focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent
                                " placeholder='please add product price' name="price" />
                                {
                                    formik.errors.price && formik.touched.price && <p className='text-red-600'>{formik.errors.price}</p>
                                }
                            </div>
                            <div>
                                <Label className='mb-2'>Product DisCountPrice</Label>
                                <Input
                                    value={formik.values.discountPrice}
                                    onChange={formik.handleChange}
                                    className="outline-none outline-offset-0   
                                focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent
                                " placeholder='Please add discount Price'

                                    name="discountPrice" />
                                {
                                    formik.errors.discountPrice && formik.touched.discountPrice && <p className='text-red-600'>{formik.errors.discountPrice}</p>
                                }
                            </div>
                            <div>
                                <Label className='mb-2'>Product Price per Cent %</Label>
                                <Input
                                    value={formik.values.pricePerCent}
                                    onChange={formik.handleChange}
                                    className="outline-none outline-offset-0   
                                focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent
                                "placeholder='Please add Product Price per cent %' name="pricePerCent"

                                />
                                {
                                    formik.errors.pricePerCent && formik.touched.pricePerCent && <p className='text-red-600'>{formik.errors.pricePerCent}</p>
                                }
                            </div>
                            <div>
                                <Label className='mb-2'>Product  Main Image </Label>
                                <Input
                                    value={formik.values.mainImage}
                                    onChange={formik.handleChange}
                                    type='file'
                                    className="outline-none outline-offset-0   
                                focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent
                                " name="mainImage"

                                />
                                {
                                    formik.errors.mainImage && formik.touched.mainImage && <p className='text-red-600'>{formik.errors.mainImage}</p>
                                }
                            </div>
                            <div>
                                <Label className='mb-2'>Product  Hover Image </Label>
                                <Input
                                    value={formik.values.hoverImage}
                                    onChange={formik.handleChange}
                                    type='file'
                                    className="outline-none outline-offset-0   
                                focus:ring-0  focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent
                                " name="hoverImage"

                                />
                                {
                                    formik.errors.hoverImage && formik.touched.hoverImage && <p className='text-red-600'>{formik.errors.hoverImage}</p>
                                }
                            </div>
                            <div>
                                <Button

                                    type="submit" className="w-full">
                                    {isPending ? 'Loading...' : 'Add Product'}
                                </Button>
                            </div>


                        </form>
                    </CustomModal>
                </div>

                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold'>Products Page</h1>
                    <Button
                        onClick={openModalHandler}
                        className='bg-blue-200 text-blue-600 hover:bg-blue-300 hover:text-blue-600'>Add Product</Button>
                </div>
                {
                    (bookData?.length == 0) && <DataNotFoundContainer />
                }
                {
                    bookIsLoading && <div className='flex justify-center items-center h-96'>
                        <div className="border-gray-300 h-12 w-12 animate-spin rounded-full border-4 border-t-blue-600" />
                    </div>
                }
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            {
                                tableHeader && tableHeader.map((header, index) => (
                                    <TableHead
                                        key={index} >{header.name}</TableHead>
                                ))
                            }
                            <TableHead>
                            </TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bookData && bookData.map((book, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{book.id}</TableCell>
                                <TableCell className="font-medium">
                                    <div className='w-20 h-20 overflow-hidden'>
                                        <img
                                            className='w-full h-full object-cover'
                                            src={book.mainImage} alt={book.title} />
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">
                                    <div className='w-20 h-20 overflow-hidden'>
                                        <img
                                            className='w-full h-full object-cover'
                                            src={book.hoverImage} alt={book.title} />
                                    </div>
                                </TableCell>
                                <TableCell>{book.category}</TableCell>

                                <TableCell >{book.price}</TableCell>
                                <TableCell >{book.discountPrice}</TableCell>
                                <TableCell >{book.pricePerCent}</TableCell>
                                <TableCell >{book.title}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => handleDelete(book?.id)}
                                        className='bg-red-200 text-red-600 hover:bg-red-300 hover:text-red-600'>
                                        {deleteLoading ? 'Loading...' : 'Delete'}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button className='bg-blue-200 text-blue-600 hover:bg-blue-300 hover:text-blue-600'>Edit</Button>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>
        </div >
    )
}

export default ProductTable