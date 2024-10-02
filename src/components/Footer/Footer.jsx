import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import './Footer.css'

function Footer() {

    return (
        <MDBFooter className='text-white'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                            Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus sint!
                        </p>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Policy</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-white'>
                                    Private Policy
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Terms and Conditions
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>
                            Contact Us
                        </h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-white'>
                                    Hotline: 1900 46 30 86
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    betokoi@fpt.edu.vn
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer