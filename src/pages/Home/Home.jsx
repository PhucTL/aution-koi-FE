import React, { useEffect } from "react";
import Slider from "react-slick";
import './Home.css'
import { getAllCategories } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";

const Home = ({userRole}) => {
    return (
        <body>
            {userRole === "MANAGER" ? (
                <ManagerHome />
            ) : userRole === "STAFF" ? (
                <StaffHome />
            ) : userRole === "BREEDER" ? (
                <BreederHome />
            ) :(
                <MemberHome />
            )}
        </body>
    )
}

const MemberHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Kích hoạt autoplay
        autoplaySpeed: 3000,   // Tốc độ chuyển đổi (3000ms = 3 giây)
    }
    const dispatch = useDispatch()
    const categoryList = useSelector((state) => state.category.categories.allCategories)

    useEffect(() => {
        getAllCategories(dispatch)
    },[])

    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 slider">
                    <Slider {...settings}>
                        <div>
                            <img src="https://nextdaykoi.com/wp-content/uploads/2020/05/product/EVERGREEN_X_7_BF3P-2.jpg" className="d-block mx-lg-auto img-fluid" alt="Slide 1" width="700" height="500" loading="lazy" />
                        </div>
                        <div>
                            <img src="https://d2e07cbkdk0gwy.cloudfront.net/wp-content/uploads/2023/06/product/EVERGREEN.2023.06.20_PP_K8_IMP-3.jpg" className="d-block mx-lg-auto img-fluid" alt="Slide 2" width="700" height="500" loading="lazy" />
                        </div>
                        <div>
                            <img src="https://blueridgekoi.com/wp-content/uploads/2018/01/1-18-17-15-of-56.jpg" className="d-block mx-lg-auto img-fluid" alt="Slide 3" width="700" height="500" loading="lazy" />
                        </div>
                    </Slider>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-4 fw-bold text-body-emphasis lh-1 mb-3">Get your favorite Koi right now with BetoKoi</h1>
                    <p className="lead">BetoKoi is a platform for buying and selling Koi fish through live auctions. Users can browse listings, place bids, and purchase directly from breeders. It offers features like detailed Koi profiles, real-time bidding, notifications, and secure payments, catering to both hobbyists and collectors.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
            </div>
            <hr />

            <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">Our Breeders</h1>

            <div className="row flex-lg-row align-items-center g-5 py-5">
                {categoryList?.map((catag) => {
                    return (
                        <div className="col-lg-4" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "3vh" }}>
                            <svg
                                className="bd-placeholder-img rounded-circle"
                                width="140"
                                height="140"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <title>Placeholder</title>
                                <image
                                    href={catag.image} // Đường dẫn đến ảnh
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                            <h2 className="fw-normal">{catag.name}</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><a className="btn btn-secondary" href="#">View details »</a></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const StaffHome = () => {
    return (
        <div>
            Staff Homepage
        </div>
    )
}

const ManagerHome = () => {
    return (
        <div>
            Manager Homepage
        </div>
    )
}

const BreederHome = () => {
    return (
        <div>
            Breeder Homepage
        </div>
    )
}

export default Home