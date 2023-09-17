import images from "./../index.js";

const foods = [
    {
        id: "01",
        title: "Tomato With Tofu Salad",
        price: 99,
        oldPrice: 9,
        discount: "15%",
        desc: "this is the description",
        reviews: [
           
        ],
        avgRating: 4.5,
        photo: images.foodImg1,
        featured: true,
    },
    {
        id: "02",
        title: "Tomato With Tofu Salad",
        price: 99,
        oldPrice: 16,
        discount: "15%",
        desc: "this is the description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
            {
                name: "jhon doe",
                rating: 5,
            },
        ],
        avgRating: 4.5,
        photo: images.foodImg2,
    },
    {
        id: "03",
        title: "Tomato With Tofu Salad",
        price: 99,
        oldPrice: 12,
        discount: "15%",
        desc: "this is the description",
        reviews: [
            
        ],
        avgRating: 4.5,
        photo: images.foodImg3,
    },
    {
        id: "04",
        title: "Tomato With Tofu Salad",
        price: 99,
        oldPrice: 15,
        discount: "15%",
        desc: "this is the description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
            {
                name: "jhon doe",
                rating: 5,
            },
        ],
        avgRating: 4.5,
        photo: images.foodImg4,
        featured: true,
    },
    {
        id: "05",
        title: "Tomato With Tofu Salad",
        price: 99,
        oldPrice: 8,
        discount: "15%",
        desc: "this is the description",
        reviews: [
            
        ],
        avgRating: 4.5,
        photo: images.foodImg5,
        featured: true,
    },
    {
        id: "06",
        title: "Tomato With Tofu Salad",
        price: 99,
        discount: "15%",
        oldPrice: 10,
        desc: "this is the description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
            {
                name: "jhon doe",
                rating: 5,
            },
        ],
        avgRating: 4.5,
        photo: images.foodImg6,
    },
    {
        id: "07",
        title: "Tomato With Tofu Salad",
        price: 99,
        discount: "15%",
        oldPrice: 10,
        desc: "this is the description",
        reviews: [
            {
                name: "jhon doe",
                rating: 4.6,
            },
            {
                name: "jhon doe",
                rating: 5,
            },
        ],
        avgRating: 4.5,
        photo: images.foodImg6,
    }
];

export default foods;
