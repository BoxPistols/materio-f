// React Imports
import { useState } from 'react'

// MUI Imports
import Badge from '@mui/material/Badge'

// Third-party Components
import classnames from 'classnames'
import { useKeenSlider } from 'keen-slider/react'

// Image Imports
// You don't need to import the image as below. You can directly use the path instead of the image variable.
// We had to import the images because we are using them in the Documentation.
import img1 from '../../../../docs/assets/images/banners/1.jpg'
import img2 from '../../../../docs/assets/images/banners/2.jpg'
import img3 from '../../../../docs/assets/images/banners/3.jpg'
import img4 from '../../../../docs/assets/images/banners/4.jpg'
import img5 from '../../../../docs/assets/images/banners/5.jpg'

const SwiperControls = () => {
  // States
  const [loaded, setLoaded] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // Hooks
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide'>
            <img src={img1} alt='swiper 1' />
          </div>
          <div className='keen-slider__slide'>
            <img src={img2} alt='swiper 2' />
          </div>
          <div className='keen-slider__slide'>
            <img src={img3} alt='swiper 3' />
          </div>
          <div className='keen-slider__slide'>
            <img src={img4} alt='swiper 4' />
          </div>
          <div className='keen-slider__slide'>
            <img src={img5} alt='swiper 5' />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <i
              className={classnames('ri-arrow-left-s-line arrow arrow-left', {
                'arrow-disabled': currentSlide === 0
              })}
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            />

            <i
              className={classnames('ri-arrow-right-s-line arrow arrow-right', {
                'arrow-disabled': currentSlide === instanceRef.current.track.details.slides.length - 1
              })}
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className='swiper-dots'>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
            return (
              <Badge
                key={idx}
                variant='dot'
                component='div'
                className={classnames({
                  active: currentSlide === idx
                })}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
              ></Badge>
            )
          })}
        </div>
      )}
    </>
  )
}

export default SwiperControls
