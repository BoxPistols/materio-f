// Third-party Components
import { useKeenSlider } from 'keen-slider/react'

const SwiperCentered = () => {
  // Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 16,
      origin: 'center'
    }
  })

  return (
    <div ref={ref} className='keen-slider'>
      <div className='keen-slider__slide'>
        <img src='/images/banners/16.jpg' alt='swiper 26' className='is-full' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/17.jpg' alt='swiper 27' className='is-full' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/18.jpg' alt='swiper 28' className='is-full' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/19.jpg' alt='swiper 29' className='is-full' />
      </div>
      <div className='keen-slider__slide'>
        <img src='/images/banners/10.jpg' alt='swiper 30' className='is-full' />
      </div>
    </div>
  )
}

export default SwiperCentered
