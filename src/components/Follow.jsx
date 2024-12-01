import cup1 from '../assets/images/cups/Rectangle 9.png'
import cup2 from '../assets/images/cups/Rectangle 10.png'
import cup3 from '../assets/images/cups/Rectangle 11.png'
import cup4 from '../assets/images/cups/Rectangle 12.png'
import cup5 from '../assets/images/cups/Rectangle 13.png'
import cup6 from '../assets/images/cups/Rectangle 14.png'
import cup7 from '../assets/images/cups/Rectangle 15.png'
import cup8 from '../assets/images/cups/Rectangle 16.png'

const Follow = () => {
    return (
        <div className=' mx-auto w-10/12 text-center'>
            <p>Follow Us Now</p>
            <h2 className='text-4xl font-medium text-[#331A15] mb-6'>Follow on Instagram</h2>
            <div className='grid grid-cols-4  gap-6'>
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />
            </div>
        </div>
    );
};

export default Follow;