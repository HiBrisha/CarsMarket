import image from '~assets/images/background.jpg'
import mercedes from '~assets/images/mercedes.png'
export const Home = () => {
  return (
    <>
      <div className={`w-full h-screen flex justify-center bg-center bg-cover font-serif`} style={{ backgroundImage: `url(${image})` }}>
        <section className='w-8/12 h-[calc(100vh-331px)] translate-y-12 grid grid-cols-2 grid-rows-1 gap-4'>
          <div className='flex flex-col justify-center'>
            <span className='text-2xl text-green-light'>Plan your trip now</span>
            <h1 className='text-4xl mt-4'>Explore the world with comfortable car</h1>
            <p className='text-gray-500 mt-4'>
              Embark on unforgettable adventures and discover the world in unparalleled comfort and style with our fleet of exceptionally comfortable cars
            </p>
            <div className='w-1/2 h-12 flex flex-row justify-around text-white mt-4'>
              <button type='button' className='rounded-lg w-1/2 mr-4' style={{ backgroundColor: '#78CA5C' }}>
                Choose a Car
              </button>
              <button type='button' className='rounded-lg w-1/2' style={{ backgroundColor: '#222733' }}>
                Get the App
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <img src={mercedes} alt='' srcSet='' />
          </div>
        </section>
      </div>
    </>
  )
}
