import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='mt-1 flex items-center justify-center'>
      <Link
        to='/2024'
        className='flex h-16 w-24 items-center justify-center font-share-tech text-2xl'
      >
        <span className='text-accent'>{'<'}</span>
        JuanDawd
        <span className='text-accent'>&nbsp;{'/>'}</span>
      </Link>
    </div>
  )
}

export default Logo
