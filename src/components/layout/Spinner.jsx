import SpinnerImage from './assets/spinner.jpg'

const Spinner = () => {
    return (
        <div className='w-100 mt-20'>
            <img 
                src={ SpinnerImage } 
                alt='Data is loading...' 
                width={180} 
                className='text-center mx-auto'
            />
        </div>)
}

export default Spinner