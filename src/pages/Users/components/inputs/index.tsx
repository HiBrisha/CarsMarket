import { inputVar } from '../types'
export const InputElements: React.FC<inputVar> = ({ placeholder, icon: Icon, inputKey, type, callback }) => {
  return (
    <>
      <div className='w-full h-10 text-black bg-white flex flex-rows'>
        <div className='w-fit h-full flex justify-center items-center border-r-2 border-dark-light p-1'>
          <Icon style={{ fontSize: '30px' }} />
        </div>
        <input
          className='w-full h-full pl-4  outline-none'
          type={type}
          id={inputKey}
          placeholder={placeholder}
          name={inputKey}
          required
          onChange={(event) => callback(event, inputKey)}
        />
      </div>
    </>
  )
}
