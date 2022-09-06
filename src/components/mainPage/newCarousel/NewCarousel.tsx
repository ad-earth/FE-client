import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as t from './newCarousel.style'
import '../../../style/carousel.css'
import Card from '../../card/Card'

const NewCarousel = () => {
  // carousel option
  const setting = {
    autoplaySpeed: 3000,
    autoplay: true,
    dotsClass: 'slick-dots',
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <t.MainContainer>
      <Slider {...setting}>
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
        <Card
          p_Thumbnail={
            'https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg'
          }
          p_Brand={'지구샵'}
          p_Name={'키친클로스(체크)'}
        />
      </Slider>
    </t.MainContainer>
  )
}

export default NewCarousel
