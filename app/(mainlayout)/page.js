import Link from "next/link";
import Script from "next/script";



export default function Home() {


  return (

    <div className="w-full flex flex-col justify-center items-center text-white bg-black">
      <div className="home-box mt-14 sm:mt-28 w-4/5 sm:w-2/3 pt-16 flex flex-col gap-7 justify-center items-center bg-black ">

        <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
        <lord-icon
          className='w-96 h-96'
          src="https://cdn.lordicon.com/ivrqzesb.json"
          trigger="hover"
          colors="primary:#545454,secondary:#ffffff"
          style={{ width: '100px', height: '100px' }}>
        </lord-icon>

        <h1 className=" text-lg sm:text-4xl font-bold text-center">Customize Your E-commerce Store</h1>
        <p className="text-lg sm:text-2xl text-center text-gray-500">Build your dream online store effortlessly with just a few steps, and grow your business.</p>

        <div className="relative top-5 flex gap-16 mt-10">
          <Link href='/Seller/login' type="button" className=" text-black bg-white hover:bg-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  ">Get Started</Link>
          <Link href='/' type="button" className=" text-black bg-white hover:bg-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  ">Learn More</Link>
        </div>

      </div>

      <div className=" w-full py-36 flex flex-col gap-7 justify-center items-center bg-slate-900">
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <lord-icon
          className='w-96 h-96'
          src="https://cdn.lordicon.com/khheayfj.json"
          trigger="hover"
          colors="primary:#848484,secondary:#ffffff"
          style={{ width: '100px', height: '100px' }}>
        </lord-icon>
        <h1 className="text-lg sm:text-4xl w-4/5 sm:w-2/3 font-bold text-center">What Else do we Offer?</h1>
        <p className="text-lg sm:text-2xl w-4/5 sm:w-2/3 text-center text-gray-500">We specialize in crafting custom Websites and Mobile Apps tailored to your unique needs. From eCommerce solutions to dynamic web applications, our team of experts is dedicated to delivering high-quality, user-centric designs that drive Success!</p>
        <div className="flex flex-wrap mt-12 gap-6 w-4/5 sm:w-2/3 justify-center items-center">
          <img src="/angular.svg" alt="angular" />
          <img src="/django.svg" alt="django" />
          <img src="/flutter.svg" alt="flutter" />
          <img src="/javascript.svg" alt="javascript" />
          <img src="/next.svg" alt="nextjs" />
          <img src="/react.svg" alt="react" />
          <img src="/rubyonrails.svg" alt="rubyonrails" />
          <img src="/wordpress.svg" alt="wordpress" />
          <img src="/php.svg" alt="php" />

        </div>
      </div>
    </div>




  );
}
