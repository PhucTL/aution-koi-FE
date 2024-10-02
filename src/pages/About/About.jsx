import './About.css'

function About() {

    return (
        <main className="container">
            <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm content1">
                {/* <img className="me-3" src="https://www.creativefabrica.com/wp-content/uploads/2020/08/09/white-and-red-koi-fish-in-circle-shape-Graphics-4903850-1.png" alt="" width="200" height="100%"/> */}
                <div className="lh-3">
                    <h1 className="h4 mb-3 text-white lh-6">Welcome to BetoKoi.com!</h1>
                    <large>AuctionKoi.com is proud to be your premier destination for Japanese Koi auctions in the United States. Our platform is dedicated to connecting Koi enthusiasts and collectors with reputable breeders from Japan, offering an exceptional selection of exquisite Japanese Koi.</large><br />
                    <large>With a deep passion for the artistry and beauty of Koi, we have created an online marketplace that brings together the finest breeders and the most discerning buyers. Our auctions provide a unique opportunity for Koi enthusiasts to acquire top-quality fish directly from renowned breeders in Japan, all from the comfort of their own homes.</large>
                </div>
            </div>

            <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Frequently Asked Questions</h6>
                <div className="d-flex text-body-secondary pt-3">
                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">How do Breeder/Japan auctions work?</strong>
                        During a breeder auction, koi are not yet in the United States and are still in Japan. Koi that are won are then shipped to the United States, quarantined for 4+ weeks by regulation, and shipped via Delta Cargo to the buyer. The buyer is responsible for all shipping and handling fees which are invoiced post auction. We will contact you via phone or email to arrange a preferred shipping time, location, and payment.
                    </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">How does shipping work and how much does it cost?</strong>
                        When you win a koi, we'll reach out to you to schedule a shipping date for which the default method is Delta Cargo. Shipping costs vary depending on the size of the koi and the type of auction you are participating in. A deposit will be charged per koi won at the end of each auction to cover the cost of shipping which varies from shipment to shipment. The deposit amount will be $250 for Japanese Breeder auctions and $130 for In-House auctions. Shipping costs are assessed post-auction and any additional fees or refunds will be invoiced seperately.
                    </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">What happens if my koi passes away in transit?</strong>
                        If your koi passes away in transit from a Breeder to the US or in quarantine at our facility, you will be credited the amount paid for your loss to your auctionkoi.com account to bid on future auctions. In the event your koi passes away in transit from our US location to your location, the cost of the Koi is unfortunately not normally able to be refunded or credited.
                    </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">When are payments due after an auction?</strong>
                        Payments are due within 48 hours of an auction ending. We will attempt to charge your payment method on file automatically, if the payment fails we may contact you via phone or email to arrange payment. If payment is not recieved, auctionkoi.com reserves the right to cancel your order and re-list the koi for auction.
                    </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">How long can I expect to wait before my koi is shipped?</strong>
                        For Breeder auctions, please expect to wait 6-8+ weeks before your koi is shipped to you. This is due to the koi being prepared and shipped from Japan to the US, then quarantined for 4+ weeks by regulation before shipping again to your location. For In-House auctions, please expect to wait 1-2 weeks before your koi is shipped to you after an auction has ended. We will contact you via phone or email to arrange a preferred shipping time, location, and payment when the shipment is prepared.
                    </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">Do you offer boarding if I can not recieve my koi right away?</strong>
                        Yes, boarding is avaliable for an additional fee. If you would like to board your fish for the winter time, we will hold them in our mud pond for $50/month per fish. Koi fish in the mud pond can not then be harvested again until the spring time. If you are wishing to board your koi for a shorter period of time, we also offer indoor boarding for $75/month per koi which can then be shipped at any time.
                    </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">Is there bid sniping protection?</strong>Yes, bids made in the final 5 minutes of the auction will add 5 minutes to the time remaining to bid for that specific koi.
                    </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                        <strong className="d-block text-gray-dark">I'm outside of the United States. Am I still eligible to bid?</strong>
                        Currently we are only able to ship auction koi to locations within the United States. We are working on expanding our shipping capabilities to other countries in the future. In the meantime, please check out our parent site SelectKoi.com and contact us to see if we are able to ship to your location and discuss any additional requirements.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default About