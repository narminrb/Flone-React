import * as Yup from 'yup'


export const ProductValidation = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    price: Yup.number("this field accept just string").required('Price is required'),
    discountPrice: Yup.number().required('Discount Price is required'),
    pricePerCent: Yup.number().required('Price Per Cent is required'),
    // category: Yup.string().required('Category is required'),
    mainImage: Yup.string().required('Main Image is required'),
    hoverImage: Yup.string().required('Hover Image is required'),
})