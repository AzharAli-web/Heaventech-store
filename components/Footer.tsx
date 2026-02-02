import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, SubTitle  } from './ui/text'
import { CategoriesData, quickLinksData } from '@/data'
import Link from 'next/link'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container> 
      <FooterTop />
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <SubText >Discover curated furniture collections at HeavenTech, blending style and comfort to elevate your living spaces.</SubText>
          <SocialMedia className="text-darkColor/60"
          iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
          tooltipClassName="bg-darkColor text-white"/>
        </div>
        <div>
          <SubTitle>Quick Links</SubTitle>
          <ul className='space-y-3 mt-4'>
            {quickLinksData?.map((item)=>(
              <li key={item?.title}>
                <Link href={item?.href} className='hover:text-shop_light_green hoverEffect font-medium'>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>

             <div>
          <SubTitle>Categories</SubTitle>
          <ul className='space-y-3 mt-4'>
            {CategoriesData?.map((item)=>(
              <li key={item?.title}>
                <Link href={`/categories/${item?.href}`} className='hover:text-shop_light_green hoverEffect font-medium'>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='space-y-4'>
          <SubTitle>Newslettter</SubTitle>
          <SubText>Subscribe to our newsletter to recieve updates and exclusive offers.</SubText>
          <form className='space-y-3 flex flex-col'>
            <input placeholder="Enter your Email." type='email' required/>
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>

      <div className='py-6 border-t text-center text-sm text-gray-600 '>
        <div className=''>
           &copy;{new Date().getFullYear()}{""}
        <Logo className='text-sm'/>
          .All rights reserved.
        </div>
      </div>



      </Container>
    </footer>
  )
}

export default Footer
