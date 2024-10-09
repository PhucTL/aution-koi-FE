import { Link } from 'react-router-dom'
import './Forbidden403.css'

function Forbidden403() {
    return (
        <body>
            <div className='hover'>
                <div className='text-center' style={{ backgroundColor: '#F2F2F2', paddingTop: '0%', textShadow: '0 2px #F5AE4E' }}>
                    <p className='fs-1 fw-bold' >Forbidden Page</p>
                    <Link type="button" class="btn btn-outline-dark " to="/">Back to home</Link>
                </div>
                <div className='background'>
                    <div className='door'>403</div>
                    <div className='rug'></div>
                </div>
                <div className='foreground'>
                    <div className='bouncer'>
                        <div className='head'>
                            <div className='neck'></div>
                            <div className='eye left'></div>
                            <div className='eye right'></div>
                            <div className='ear'></div>
                        </div>
                        <div className='body'></div>
                        <div className='arm'></div>
                    </div>
                    <div className='poles'>
                        <div className='pole left'></div>
                        <div className='pole right'></div>
                        <div className='rope'></div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Forbidden403