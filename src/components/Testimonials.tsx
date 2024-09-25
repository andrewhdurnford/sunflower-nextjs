
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

interface Quote {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialProps {
  setScrollEnabled: (enabled: boolean) => void;
}

const Testimonials: React.FC<TestimonialProps> = ({ setScrollEnabled }) => {
  const quotes = [
    {
        quote: "Quality is really what really sets Liu apart from other investors. Working with Liu was unique because she was extremely proactive. She was always trying to find ways to help, not just relying on me to think about what I needed. We had regular discussions on topics ranging from customer negotiations to internal operations to creating a standard around Iceberg.",
        author: "Ryan Blue",
        company: "Tabular (acquired by Databricks)"
    },
    {
        quote: "Liu invested in our seed and then doubled down in subsequent rounds. She helped us with initial positioning and messaging on our website and customer materials, discussing our key product use cases, and thinking through developer ubiquity.",
        author: "Maxim Fateev",
        company: "Temporal"
    },
    {
        quote: "Liu had early conviction in Verkada. Her ability to quickly immerse herself in new markets is a real differentiator amongst early stage investors. I was very impressed by her deep knowledge of our industry, which led to insightful and strategic questions coupled with tailored advice and direction.",
        author: "Raj Misra",
        company: "Verkada"
    },
    {
        quote: "Liu has been part of the Athelas journey since founding. She wrote the first check into Athelas through Dorm Room Fund, and she then helped champion and lead our seed round in 2016. She's seen us evolve the product surface area, refine GTM, and expand the team over the years.",
        author: "Tanay Tandon",
        company: "Athelas & Commure"
    },
    {
        quote: "Liu is the best kind of investor: she is technical, understands product, and can quickly understand the big picture. She's really well connected with top talent and investors. She'll help when she's needed and give you space to operate otherwise. Highly recommend working with her.",
        author: "Kareem Amin",
        company: "Clay"
    },
    {
        quote: "We really enjoyed working with Liu in the early years of Semgrep. She was always a thoughtful and insightful voice on early product and GTM questions in the painful pre-PMF days!",
        author: "Isaac Evans",
        company: "Semgrep"
    },
    {
        quote: "Liu was one of the first investors and believers in Hadrian. She helped us settle into Los Angeles, and guided us through Hadrian’s rapid growth, expansion, and fundraising journey.",
        author: "Chris Power",
        company: "Hadrian"
    },
    {
        quote: "Liu has been an invaluable investor for Warp, going way beyond just investing money, to investing a bunch of her time helping us with GTM, Growth, and Product. She brings deep expertise in the developer space, and we've learned a lot working with her. She is more willing and able than most investors to roll up her sleeves and help the leadership team operate.",
        author: "Zach Lloyd",
        company: "Warp"
    },
    {
        quote: "Liu is the most energetic investor I've ever met. We raised our seed round during Covid, and Liu was one of the first to commit to investing. She made more intros and was more engaged than anyone else - without her enthusiasm I don't know how we'd have closed the round!",
        author: "James Hawkins",
        company: "Posthog"
    },
    {
        quote: "Liu built a relationship with us while we were still at Uber building Michelangelo. She had the conviction to colead our seed and Series A, and she was pivotal in helping us hire our early team and close our first few marquee customers.",
        author: "Kevin Stumpf",
        company: "Tecton"
    },
    {
        quote: "Liu strikes the perfect balance of an early stage partner. She was one of the first to back us at the pre-seed, and she’s supported us consistently. She'll trail all your investor updates, ready to provide critical guidance immediately when called upon. Whether it's GTM, product, or just hard founder shit, she's got you.",
        author: "Jake Cooper",
        company: "Railway"
    },
    {
        quote: "Even before leading our pre-seed, Liu impressed us with her spot-on perspectives on strategy. From the onset, it was clear she took the time to thoroughly understand our business on a deeper level. We’ve gotten a lot of value from her advice on scalable GTM plans and ensuring we are focusing our efforts on the right ICP and partners.",
        author: "Olivia Joslin",
        company: "Tollbit"
    },
    {
        quote: "Liu was one of the first investors we started working with at Knock. Not only was she an instrumental part of our early fundraising, she also helped introduce us to many potential customers. Even now, several years after her initial investment in Knock, Liu continues to respond to our investor updates, offering ways to help. I'm grateful she's been a part of our journey.",
        author: "Sam Seely",
        company: "Knock"
    },
    {
        quote: "Working with Liu was an exceptional experience. Her strategic approach to GTM execution, combined with a focus on rapid expansion, was key in driving significant growth. Her ability to navigate fundraising rounds demonstrated strong leadership and commitment to success.",
        author: "Benjamin Labra",
        company: "Houm"
    },
    {
        quote: "Since the pre-seed, Liu has been a great resource for tldraw as a design technology company. She’s a familiar name in the industry, generous with introductions, and has delivered timely advice for our GTM, hiring, and financing strategy.",
        author: "Steve Ruiz",
        company: "Tldraw"
    },
    {
        quote: "Liu was the investor I spoke to most frequently. As a solo founder, I appreciated her being a sounding board. She joined customer calls, helped us figure out pricing and business model, and introduced us to and interviewed potential hires.",
        author: "Alana Marzoev",
        company: "ReadySet"
    },
    {
        quote: "Liu led our pre-seed. She is the investor you want on your team early on if you really care about GTM, getting customers, and smartly positioning your product. She will make you think from first principles and ask you the right set of guiding questions, while also opening a lot of doors to folks in the industry and other founders.",
        author: "Vasek Mlejnsky",
        company: "E2B"
    },
    {
        quote: "Liu has been an incredible partner for Unkey. Whenever we need a sounding board on GTM strategy, Liu is ready to jump in. We see Liu as an extension of our team — she really helps drive our success and growth.",
        author: "James Perkins",
        company: "Unkey"
    },
    {
        quote: "Liu is always accessible and genuinely understands the challenges of early stage companies. She has been crucial in helping us connect with the right customers and clearly define our target audience. Her insights and practical advice have been essential in refining our GTM strategy and product direction. Our sessions with her are focused and productive, and we tackle critical topics with depth.",
        author: "Aamir Shakir",
        company: "Mixedbread"
    },
    {
        quote: "Liu is fantastic to work with. She’s easy to talk to and strategically astute. She happily makes intros to her excellent network, and she’s been a tremendous value add at helping us with customer intros.",
        author: "Zach Long",
        company: "ConductorAI"
    },
    {
        quote: "Liu has made many an intro to her amazing network of executives, many of whom have made great advisors as we bootstrapped our GTM functions. Liu is always available but not overbearing — if you need help, she is just a text away.",
        author: "Apurva Mehta",
        company: "Responsive"
    },
    {
        quote: "Liu has been an invaluable partner to us. She is always readily available when we need her expertise, whether it's about hiring, product, or open source. She is sensitive to our time and proactively offers advice without pushing anything on us.",
        author: "Peter Marton",
        company: "OpenMeter"
    },
    {
        quote: "Working with Liu has been one of the best decisions we have made! She has helped us on strategically planning out our roadmap, securing key hires, navigating partnerships, and building community and ecosystem.",
        author: "Yoland Yan",
        company: "Comfy"
    }
  ];

  const [isSwiped, setIsSwiped] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: false,
    });

    // When the slider finishes a transition, update state
    glide.on('run.after', () => {
      setIsSwiped(true); 
    });

    // Mount the Glide carousel
    glide.mount();

    // Handle preventing default behavior for touchmove
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    // Add event listener for touch move
    const testimonial = testimonialRef.current;
    if (testimonial) {
      testimonial.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    if (leftArrow && rightArrow) {
      leftArrow.addEventListener('click', () => glide.go('<'));
      rightArrow.addEventListener('click', () => glide.go('>'));
    }

    return () => {
      if (testimonial) {
        testimonial.removeEventListener('touchmove', handleTouchMove);
      }
      if (leftArrow && rightArrow) {
        leftArrow.removeEventListener('click', () => glide.go('<'));
        rightArrow.removeEventListener('click', () => glide.go('>'));
      }
      glide.destroy();
    };
  }, []);

  return (
    <div className="glide flex flex-col flex-grow items-center justify-center w-full bg-offwhite text-dark-green gap-6 xl:gap-12">
      <div className='w-4/5 flex gap-6 landscape:justify-between justify-start items-center'>
        <div className={`w-full font-arya text-dark-green text-5xl sm:text-6xl lg:text-7xl leading-none text-left`}>
          Our Founders
        </div>
        <div className={`glide__arrows flex gap-3 lg:gap-6 items-center justify-center transition-opacity duration-1000`} data-glide-el="controls">
          <div className="glide__arrow--left font-semibold font-bitter leading-none w-6 h-6 sm:w-10 sm:h-10" data-glide-dir="<">
            <div className="arrow-container">
              <Image
                src="/images/left-arrow.svg"
                alt="left arrow"
                layout="responsive"
                width={100} 
                height={100} 
                quality={100}
              />
            </div>
          </div>
          <div className="glide__arrow--right font-semibold font-bitter w-6 h-6 sm:w-10 sm:h-10" data-glide-dir=">">
            <div className="arrow-container">
              <Image
                src="/images/right-arrow.svg"
                alt="right arrow"
                layout="responsive"
                width={100}
                height={100}
                quality={100}
              />
            </div>
          </div>
        </div>
        {/* <div className={`landscape:hidden text-dark-green font-bitter transition-opacity duration-500 ${isSwiped ? 'opacity-0' : 'opacity-100'}`}>Swipe to see more →</div> */}
      </div>

      <div className={`glide__track w-4/5 transition-opacity duration-1000`} 
        data-glide-el="track"
        onTouchStart={() => setScrollEnabled(false)} 
        onTouchEnd={() => setScrollEnabled(true)}
      >
        <ul className="glide__slides">
          {quotes.map((quote, index) => (
            <li key={index} className="glide__slide flex flex-col justify-center items-center gap-6">
              <div className="font-bitter text-base md:text-xl xl:text-2xl w-full text-left sm:leading-extra-loose md:leading-extra-loose lg:leading-extra-loose xl:leading-extra-loose">
              &ldquo;{quote.quote}&rdquo;
              </div>
              <div className="font-bitter text-base sm:text-xl md:text-2xl text-dark-green text-left w-full">
              <span className='portrait:hidden'>&emsp;</span>- {quote.author},&nbsp;
              <span className="font-bitter-italic">{quote.company}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
