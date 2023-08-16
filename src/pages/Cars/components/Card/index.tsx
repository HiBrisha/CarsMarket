interface CardProps {
  car_image: string
}
export const Card: React.FC<CardProps> = ({ car_image }) => {
  return (
    <>
      <div className='w-full h-fit flex justify-center'>
        <div className='w-[280px] h-[360px] bg-white p-4 flex flex-col center shadow-md'>
          <div className='w-full h-[165px] flex justify-center items-center'>
            <img src={car_image} className='object-contain w-full h-[165px]' alt='' srcSet='' />
          </div>

          <div className='w-full h-full flex flex-col items-start justify-center'>
            <div className='w-fit h-fit flex items-center '>
              <div className='w-[10px] h-[10px] rounded-full bg-orange-500'></div>
              <span className='ml-2'>Koenigsegg</span>
            </div>
            <div className='w-full h-fit flex flex-col'>
              <span className='text-2xl font-semibold '>Koenigsegg Agera R</span>
              <span className='font-semibold normal'>45 Tỷ</span>
            </div>
            <button className='w-full h-[45px] flex items-center justify-center border-1 border-orange-500 bg-white font-bold rounded-lg mt-2 text-orange-500'>Xem chi tiết</button>
          </div>
        </div>
      </div>
    </>
  )
}
