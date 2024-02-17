import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup'
function Hero() {
  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          {/*============ hero left content ============*/}
          <div className='w-full md:basis-1/2'>
            <h5 data-aos='fade-right' 
              data-aos-duration='1500' 
              className='text-headingColor font-[600] text-[16px]'>
              Hello welcome
            </h5>
            <h1 data-aos='fade-up'
              data-aos-duration='1500' className='tex-headingColor font-[800] text-[1.8rem] sm:text-[40px]'>
                I'm Elizabeth Behaghel <br/>Software Developer
              </h1>
              <div data-aos='fade-up'
              data-aos-duration='1800'
              data-aos-delay="200"
              className='flex items-center gap-6 mt-7'>
                <a href='#contact'>
                  <button className='bg-primaryColor text-white font-[500] flex 
                  items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                    <i className="ri-mail-line">Hire me</i>
                  </button>
                </a>
                <a href='#portflio' className='text-smallTextColor 
                  font-[600] text-[16px] border-b border-solid'>
                    See portfolio
                </a>
              </div>
              <p data-aos='fade-left'
                data-aos-duration='1500' className='flex gap-2 text-headingColor font-[500] 
                text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                  <span>
                    <i class="ri-apps-line"></i>
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quod ut 
                  unde cupiditate perspiciatis laborum soluta magnam quis possimus minus excepturi pariatur eos, 
                  laudantium nihil. Rem impedit esse maiores hic quae modi. Iusto quos aperiam vel eius dolorem.
                </p>
                <div className='flex items-center gap-9 mt-14'>
                  <span className='text-smallTextColor text-[15px] font-[600]'>
                    Follow me:
                  </span>
                  <span>
                    <a href="#linkedin"
                    className='text-smallTestColor text-[18px] font-[600]'>
                      <i class="ri-linkedin-box-line"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#github"
                    className='text-smallTestColor text-[18px] font-[600]'>
                      <i class="ri-github-fill"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#twitter"
                    className='text-smallTestColor text-[18px] font-[600]'>
                    <i class="ri-twitter-line"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#medium"
                    className='text-smallTestColor text-[18px] font-[600]'>
                    <i class="ri-medium-line"></i>
                    </a>
                  </span>
                </div>
          </div>
          {/*============ hero left end ============*/}
        </div>
      </div>
    </section>
  )
}

export default Hero