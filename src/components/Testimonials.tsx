
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { link } from 'fs';

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
      company: "Tabular (acquired by Databricks)",
      link: "https://tabular.io/"
    },
    {
      quote: "Liu is the best kind of investor: she is technical, understands product, and can quickly understand the big picture. She's really well connected with top talent and investors. She'll help when she's needed and give you space to operate otherwise. Highly recommend working with her.",
      author: "Kareem Amin",
      company: "Clay",
      link: "https://clay.com/"
    },
    {
      quote: "Liu had early conviction in Verkada. Her ability to quickly immerse herself in new markets is a real differentiator amongst early stage investors. I was very impressed by her deep knowledge of our industry, which led to insightful and strategic questions coupled with tailored advice and direction.",
      author: "Raj Misra",
      company: "Verkada",
      link: "https://www.verkada.com/"
    },
    {
      quote: "Liu invested in our seed and then doubled down in multiple subsequent rounds. She helped us with initial positioning and messaging on our website and customer materials, discussing our key product use cases, and thinking through developer ubiquity.",
      author: "Maxim Fateev",
      company: "Temporal",
      link: "https://temporal.io/"
    },
    {
      quote: "Liu has been part of the Athelas journey since founding. She wrote the first check into Athelas through Dorm Room Fund, and she then helped champion and lead our seed round in 2016. She's seen us evolve the product surface area, refine GTM, expand the team, and merge with Commure into a $6B+ healthcare infrastructure company.",
      author: "Tanay Tandon",
      company: "Athelas & Commure",
      link: "https://www.commure.com/"
    },
    {
      quote: "We really enjoyed working with Liu in the early years of Semgrep. She was always a thoughtful and insightful voice on early product and GTM questions in the painful pre-PMF days!",
      author: "Isaac Evans",
      company: "Semgrep",
      link: "https://semgrep.dev/"
    },
    {
      quote: "Liu was one of the first investors and believers in Hadrian. She helped us settle into Los Angeles, and guided us through Hadrian's rapid growth, expansion, and fundraising journey.",
      author: "Chris Power",
      company: "Hadrian",
      link: "https://www.hadrian.co/"
    },
    {
      quote: "Liu is the most energetic investor I've ever met. We raised our seed round during Covid, and Liu was one of the first to commit to investing. She made more intros and was more engaged than anyone else - without her enthusiasm I don't know how we'd have closed the round!",
      author: "James Hawkins",
      company: "Posthog",
      link: "https://posthog.com/"
    },
    {
      quote: "Liu has been an invaluable investor for Warp, going way beyond just investing money, to investing a bunch of her time helping us with GTM, Growth, and Product. She brings deep expertise in the developer space, and we've learned a lot working with her. She is more willing and able than most investors to roll up her sleeves and help the leadership team operate.",
      author: "Zach Lloyd",
      company: "Warp",
      link: "https://warp.dev/"
    },
    {
      quote: "Liu strikes the perfect balance of an early stage partner. She was one of the first to back us at the pre-seed, and she's supported us consistently. She'll trail all your investor updates, ready to provide critical guidance immediately when called upon. Whether it's GTM, product, or just hard founder shit, she's got you.",
      author: "Jake Cooper",
      company: "Railway",
      link: "https://railway.app/"
    },
    {
      quote: "Even before leading our pre-seed, Liu impressed us with her spot-on perspectives on strategy. From the onset, it was clear she took the time to thoroughly understand our business on a deeper level. We've gotten a lot of value from her advice on scalable GTM plans and ensuring we are focusing our efforts on the right ICP and partners.",
      author: "Olivia Joslin",
      company: "Tollbit",
      link: "https://tollbit.com/"
    },
    {
      quote: "Liu led our pre-seed. She is the investor you want on your team early on if you really care about GTM, getting customers, and smartly positioning your product. She will make you think from first principles and ask you the right set of guiding questions, while also opening a lot of doors to folks in the industry and other founders.",
      author: "Vasek Mlejnsky",
      company: "E2B",
      link: "https://e2b.dev/"
    },
    {
      quote: "Liu is fantastic to work with. She's easy to talk to and strategically astute. She happily makes intros to her excellent network, and she's been a tremendous value add at helping us with customer intros.",
      author: "Zach Long",
      company: "ConductorAI",
      link: "https://conductorai.co/"
    },
    {
      quote: "Liu was one of the first investors we started working with at Knock. Not only was she an instrumental part of our early fundraising, she also helped introduce us to many potential customers. Even now, several years after her initial investment in Knock, Liu continues to respond to our investor updates, offering ways to help. I'm grateful she's been a part of our journey.",
      author: "Sam Seely",
      company: "Knock",
      link: "https://knock.app/"
    },
    {
      quote: "Liu immediately understood our business because of the market work Sunflower had done previously, and they moved quickly with an investment. We are a company with European roots, and they opened their deep network of potential US customers and partners to us. They are real hustlers, willing to do ground work to help their founders succeed. They've also advised us on executive hiring and on expanding our team. Brilliant to have Sunflower with us!",
      author: "Moritz Schiebold",
      company: "Rerun",
      link: "https://rerun.io/"
    },
    {
      quote: "Liu has a deep understanding of open source and AI infra, and is very well connected to hires, customers, and partners in the space. She's a pleasure to work with and is an amazing resource for early-stage AI founders.",
      author: "Charles Packer",
      company: "Letta",
      link: "https://www.letta.com/"
    },
    {
      quote: "Working with Liu has been one of the best decisions we have made! She has helped us on strategically planning out our roadmap, securing key hires, navigating partnerships, and building community and ecosystem.",
      author: "Yoland Yan",
      company: "Comfy",
      link: "https://comfy.org/"
    },
    {
      quote: "Since the pre-seed, Liu has been a great resource for tldraw as a design technology company. She's a familiar name in the industry, generous with introductions, and has delivered timely advice for our GTM, hiring, and financing strategy.",
      author: "Steve Ruiz",
      company: "Tldraw",
      link: "https://tldraw.com/"
    },
    {
      quote: "Liu built a close relationship with us while we were still at Uber building Michelangelo. She had the conviction to colead our seed and Series A, and she was pivotal in helping us hire our early team and close our first few marquee customers.",
      author: "Kevin Stumpf",
      company: "Tecton",
      link: "https://tecton.ai/"
    },
    {
      quote: "From our initial launch to our ultimate acquisition, Liu was with us every step of the way - working through problems, facilitating intros, and helping us hone in on our goals. The first time we met, we sat down in a coffee shop and meticulously discussed our progress and every facet of our business strategy. She's an incredible thought partner who will consistently show up for you in the good times and the bad — one of the traits I now look for very closely when I meet VCs. Hands down the most helpful and engaged investor on our cap table.",
      author: "Nicole Fitzgerald",
      company: "AlpacaML (acquired by Captions)",
      link: "https://www.axios.com/pro/media-deals/2024/11/13/captions-video-editing-app-alpacaml" 
    },
    {
      quote: "Liu has been a powerhouse of support since day one. Her impact on our company has been nothing short of transformative — a level of involvement that's hard to replicate. From helping us find our first hires to shaping GTM strategy and supporting product launches, she's consistently gone above and beyond at every stage. She's also available to her founders at almost all hours of the day.",
      author: "Elias Fizesan",
      company: "Canopy Labs",
      link: "https://canopylabs.ai/"
    },
    {
      quote: "Working with Liu has been an exceptional experience. Her strategic approach to GTM execution, combined with a focus on rapid expansion, was key in driving significant growth. Her ability to navigate fundraising rounds demonstrated strong leadership and commitment to success.",
      author: "Benjamin Labra",
      company: "Houm",
      link: "https://houm.com/"
    }
  ];

  const [isSwiped, setIsSwiped] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleArrow = (event: { key: String; }) => {
        if (event.key === "ArrowLeft") {
            const leftArrow = document.getElementById("left-arrow");
            if (leftArrow) {
              leftArrow.classList.add('scale-95');
              leftArrow.classList.add('opacity-50');
              setTimeout(() => {
                leftArrow.classList.remove('scale-95');
                leftArrow.classList.remove('opacity-50');
              }, 300);
            }
        } else {
            const rightArrow = document.getElementById("right-arrow");
            if (rightArrow) {
              rightArrow.classList.add('scale-95');
              rightArrow.classList.add('opacity-50');
              setTimeout(() => {
                rightArrow.classList.remove('scale-95');
                rightArrow.classList.remove('opacity-50');
              }, 300);
            }
        }
            
    };
    window.addEventListener('keydown', handleArrow);

    return () => {
        window.removeEventListener('keydown', handleArrow);
    };
}, []);

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: false,
    });

    glide.on('run.after', () => {
      setIsSwiped(true); 
    });

    glide.mount();


    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); 
    };

    const testimonial = testimonialRef.current;
    if (testimonial) {
      testimonial.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (testimonial) {
        testimonial.removeEventListener('touchmove', handleTouchMove);
        glide.destroy();
      }
  };

  }, []);

  return (
    <div className="glide flex flex-col flex-grow items-center justify-center w-full bg-offwhite text-dark-green gap-6 xl:gap-12">
      <div className='w-4/5 flex gap-6 justify-between items-center'>
        <div className={`w-full font-arya text-dark-green text-tmd lg:text-tlg leading-none text-left`}>
          Founders
        </div>
        <div className={`glide__arrows flex gap-3 lg:gap-6 items-center justify-center transition-opacity duration-1000`} data-glide-el="controls">
          <div className="glide__arrow--left font-semibold font-bitter leading-none w-8 h-8 sm:w-12 sm:h-12" data-glide-dir="<">
            <button 
              id="left-arrow"
              className="arrow-container transform transition-transform duration-300"
              onClick={(e) => {
                const button = e.currentTarget;
                button.classList.add('scale-95');
                button.classList.add('opacity-50');
                setTimeout(() => {
                  button.classList.remove('scale-95');
                  button.classList.remove('opacity-50');
                }, 300);
              }}
            >
              <Image
                className={`transition-opacity transition-scale duration-300 opacity-100`}
                src="/images/left.svg"
                alt="left arrow"
                width={100}
                height={100}
                quality={100}
              />
            </button>
          </div>
          <div className="glide__arrow--right w-8 h-8 sm:w-12 sm:h-12" data-glide-dir=">">
            <button 
              id="right-arrow"
              className="arrow-container"
              onClick={(e) => {
                const button = e.currentTarget;
                button.classList.add('scale-95');
                button.classList.add('opacity-50');
                setTimeout(() => {
                  button.classList.remove('opacity-50');
                  button.classList.remove('scale-95');
                }, 300);
              }}
            >
              <Image
                className="transition-opacity transition-scale duration-300 opacity-100"
                src="/images/right.svg"
                alt="right arrow"
                width={100}
                height={100}
                quality={100}
              />
            </button>
          </div>
        </div>
      </div>

      <div className={`glide__track w-4/5 transition-opacity duration-1000`} 
        data-glide-el="track"
        onTouchStart={() => setScrollEnabled(false)} 
        onTouchEnd={() => setScrollEnabled(true)}
      >
        <ul className="glide__slides">
          {quotes.map((quote, index) => (
            <li key={index} className="glide__slide flex flex-col justify-center items-center gap-6">
              <h3 className="font-bitter
              xl:text-bmd xl:leading-lg
              ">
              &ldquo;{quote.quote}&rdquo;
              </h3>
              <div className="flex flex-col font-bitter text-dark-green text-left w-full gap-2
              xl:text-bmd xl:leading-md 
              ">
              <h3 className='font-semibold'>{quote.author}</h3>
              <a href={quote.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-[1px] hover:cursor-pointer block w-fit font-bitter-italic">
                <h3 className="font-bitter-italic">{quote.company}</h3>
              </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
