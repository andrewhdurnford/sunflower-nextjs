   import React from 'react';
import DropDown from './DropDown';

interface EthosProps {}

const Ethos: React.FC<EthosProps> = () => {
    const [active, setActive] = React.useState(0);

    return (
        <div
        id="ethos"
        className="h-[calc(100dvh)] w-full bg-offwhite flex flex-col items-center justify-center overflow-hidden 
        xl:gap-10 2xl:gap-12
      ">
        <h1 className="font-arya text-dark-green w-[85%] text-left
        text-tmd xl:text-tlg 2xl:text-txl
        ">
        Ethos
        </h1>
        <div className="flex flex-col font-bitter text-dark-green text-left w-[85%] lg:h-[26.25rem] xl:h-[37.25rem] 2xl:h-[42.75rem] justify-around
        text-b4xs xs:text-b3xs lg:text-bxs xl:text-bmd 2xl:text-bsm
          ">
          <button
          onClick={() => setActive(active === 1 ? 0 : 1)}
          >
              <DropDown question='We often write the first check to visionaries who act with urgency.'
              answer1='We back founders with original insights, technical acumen, and insatiable ambition.'
              answer2='Well before their founder journeys begin, we build deep-rooted, long-term relationships with product artisans who build with intention.'
                isExpanded={active === 1}
                />
          </button>
          <button
          onClick={() => setActive(active === 2 ? 0 : 2)}
          >
              <DropDown question='We partner with emerging category-defining leaders that endure.'
              answer1='We invest in N-of-1 companies that marry defensible technology with novel go-to-market.'
              answer2='Many create new markets or reimagine legacy industries through robust software, delightful UX, and superior incentives.'
                isExpanded={active === 2}
                />
          </button>
          <button
          onClick={() => setActive(active === 3 ? 0 : 3)}
          >
              <DropDown question='We operate with the lens of over a decade of hard-earned experience.'
              answer1='We bring the kind of context, case studies, and inside stories that don&apos;exist online.'
              answer2='We don&apos;t chase consensus. We develop independent theses, move with conviction, and nail market timing.'
                isExpanded={active === 3}
                />
          </button>
          <button
          onClick={() => setActive(active === 4 ? 0 : 4)}
          >
              <DropDown question='We work on founders&apos; terms, not ours.'
              answer1='Every founding team is unique. From day one, we proactively sow the seeds for our companies to blossom.'
              answer2='We help founders find product-market fit, hire world-class talent, and grow to their first few million in quality recurring revenue.'
                isExpanded={active === 4}
                />
          </button>
        </div>
        </div>
    );
};

export default Ethos;