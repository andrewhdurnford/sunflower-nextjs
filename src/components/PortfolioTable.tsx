import React, { useMemo, useState, useEffect, useRef } from 'react';

interface Company {
  company: string;
  industry: string;
  description: string;
  link: string;
}

interface PortfolioTableProps {
  setScrollEnabled: (enabled: boolean) => void;
  setScrollUpEnabled: (enabled: boolean) => void;
  setScrollDownEnabled: (enabled: boolean) => void;
  isMobile: boolean;
}

const PortfolioTable: React.FC<PortfolioTableProps> = ({ setScrollEnabled, setScrollUpEnabled, setScrollDownEnabled, isMobile }) => {
  const companies = [
    { company: 'Accrue Savings', industry: 'Fintech', description: 'Save now, buy later', link: 'https://www.accruesavings.com/' },
    { company: 'AgentSync', industry: 'Fintech', description: 'Automating insurance compliance', link: 'https://agentsync.io/' },
    { company: 'Commure (Athelas)', industry: 'Healthcare & Bio', description: 'Integrated healthcare operations platform', link: 'https://www.commure.com/' },
    { company: 'Cal', industry: 'Infra', description: 'Open source scheduling infrastructure', link: 'http://cal.com' },
    { company: 'Clay', industry: 'SaaS', description: 'Scaling GTM with data enrichment and personalized outreach', link: 'http://clay.com' },
    { company: 'Cohere', industry: 'AI/ML', description: 'LLMs and RAG capabilities for enterprises', link: 'https://cohere.com/' },
    { company: 'Comfy', industry: 'AI/ML', description: 'The ComfyUI company', link: 'https://www.comfy.org/' },
    { company: 'Conductor AI', industry: 'Defense and Hardware', description: 'Automating government and defense compliance', link: 'https://conductorai.co/' },
    { company: 'DBT', industry: 'Data', description: 'Transforming data in your warehouse', link: 'https://www.getdbt.com/' },
    { company: 'Deel', industry: 'SaaS', description: 'Powering the future of global HR', link: 'https://www.deel.com/' },
    { company: 'E2B', industry: 'AI/ML', description: 'Code interpreting for AI apps', link: 'https://e2b.dev/' },
    { company: 'Footprint', industry: 'Security', description: 'KYC and identity verification', link: 'http://onefootprint.com' },
    { company: 'Freshpaint', industry: 'Healthcare & Bio', description: 'Enabling patient privacy and HIPAA compliance', link: 'https://www.freshpaint.io/' },
    { company: 'Gem', industry: 'SaaS', description: 'Recruiting with speed and efficiency', link: 'https://www.gem.com/' },
    { company: 'Hadrian', industry: 'Defense and Hardware', description: 'Manufacturing the future', link: 'https://www.hadrian.co/' },
    { company: 'Houm', industry: 'Fintech', description: 'Real estate marketplace for Latin America', link: 'https://www.houm.com/' },
    { company: 'Knock', industry: 'Developer', description: 'Flexible, reliable notifications infrastructure', link: 'https://knock.app/' },
    { company: 'Letta', industry: 'AI/ML', description: 'Long-term memory for AI agents', link: 'https://www.letta.com/' },
    { company: 'Monad', industry: 'Crypto', description: 'Extreme parallelized performance for EVM', link: 'https://www.monad.xyz/' },
    { company: 'Nebra', industry: 'Crypto', description: 'Universal proof aggregation that scales ZKP verification', link: 'https://www.nebra.one/' },
    { company: 'Ollama', industry: 'AI/ML', description: 'Easiest way to get up and running with LLMs', link: 'https://ollama.com/' },
    { company: 'PostHog', industry: 'Data', description: 'Open source product analytics', link: 'https://posthog.com/' },
    { company: 'Project Discovery', industry: 'Security', description: 'Open source vulnerability scanning', link: 'https://projectdiscovery.io/' },
    { company: 'Railway', industry: 'Infra', description: 'Deploy software instantly at scale', link: 'https://railway.app/' },
    { company: 'Retool', industry: 'Developer', description: 'Fastest way to build internal software', link: 'https://retool.com/' },
    { company: 'Roboflow', industry: 'AI/ML', description: 'Build and deploy computer vision models faster and more accurately', link: 'https://roboflow.com/' },
    { company: 'Scroll', industry: 'Crypto', description: 'zkEVM scaling solution for Ethereum', link: 'https://scroll.io/' },
    { company: 'Semgrep', industry: 'Security', description: 'Guiding developers towards secure by default practices', link: 'https://semgrep.dev/' },
    { company: 'Statsig', industry: 'Data', description: 'Feature management and experimentation platform', link: 'https://www.statsig.com/' },
    { company: 'Tabular (Databricks)', industry: 'Data', description: 'Storage platform from the creators of Apache Iceberg', link: 'https://tabular.io/' },
    { company: 'Taktile', industry: 'Fintech', description: 'Automating risk decisions for fintechs and banks', link: 'https://taktile.com/' },
    { company: 'Tecton', industry: 'AI/ML', description: 'Abstracting away data engineering for AI', link: 'https://tecton.ai/' },
    { company: 'Temporal', industry: 'Infra', description: 'Open source durable execution', link: 'https://temporal.io/' },
    { company: 'Tldraw', industry: 'Developer', description: 'Collaborative whiteboarding with an infinite canvas', link: 'https://www.tldraw.com/' },
    { company: 'TollBit', industry: 'AI/ML', description: 'AI content monetization at scale', link: 'https://tollbit.com/' },
    { company: 'Trucksmarter', industry: 'SaaS', description: 'Build, manage, and grow your trucking business', link: 'https://trucksmarter.com/' },
    { company: 'Truffle', industry: 'Security', description: 'Open source secret scanning', link: 'https://trufflesecurity.com/' },
    { company: 'Vercel', industry: 'Developer', description: 'The frontend cloud for a faster, personalized web', link: 'https://vercel.com/' },
    { company: 'Verkada', industry: 'Defense and Hardware', description: 'Integrated physical security platform', link: 'https://www.verkada.com/' },
    { company: 'Warp', industry: 'Developer', description: 'The modern terminal, reimagined with AI', link: 'https://www.warp.dev/' },
    { company: 'Xata', industry: 'Infra', description: 'Serverless data platform for PostgreSQL', link: 'https://xata.io/' },
    { company: 'Slingshot AI', industry: 'Healthcare & Bio', description: 'Increasing global access to mental healthcare', link: 'https://www.slingshot.xyz/' },
    { company: 'Salient Motion', industry: 'Defense and Hardware', description: 'Motion control systems for aerospace and defense ', link: 'https://www.salientmotion.com/' },
    { company: 'Inscribe', industry: 'Fintech', description: 'AI-powered workforce for risk teams at financial services companies', link: 'https://www.inscribe.ai/' },
    { company: 'Exo', industry: 'Crypto', description: 'Unify your everyday devices into one powerful GPU', link: 'https://github.com/exo-explore/exo' },
    { company: 'TipLink', industry: 'Crypto', description: 'The simplest Solana wallet', link: 'https://tiplink.io/' },
    { company: 'StrongDM', industry: 'Security', description: 'Zero trust privileged access', link: 'https://www.strongdm.com/' },
    { company: 'Pendulum', industry: 'Healthcare & Bio', description: 'Next-generation probiotics', link: 'https://pendulumlife.com/' },
    { company: 'Rerun', industry: 'Data', description: 'The multimodal data stack', link: 'https://rerun.io/' },
    { company: 'Omni', industry: 'Data', description: 'Next-generation business analytics', link: 'https://omni.co/' },
    { company: 'Fillout', industry: 'Developer', description: 'Build any form, without code', link: 'http://fillout.com/' },
    { company: 'Lilt', industry: 'AI/ML', description: 'The AI platform for enterprise translation.', link: 'https://lilt.com/' },         
    { company: 'Waldo', industry: 'AI/ML', description: 'Become an expert in seconds.', link: 'https://www.waldo.fyi/' },    
    { company: 'Flock Homes', industry: 'Fintech', description: 'Retire from being a landlord.', link: 'https://flockhomes.com/' },  
    { company: 'Turnkey', industry: 'Crypto', description: 'Secure, flexible, and scalable key management infrastructure.', link: 'https://www.turnkey.com/' },        
    { company: 'VoidZero', industry: 'Developer', description: 'Unified toolchain for Javascript.', link: 'https://voidzero.dev/' },          
    { company: 'Loyal', industry: 'Healthcare & Bio', description: 'Veterinary medicine for longevity', link: 'http://loyal.com/' }
  ].sort((a, b) => a.company.localeCompare(b.company));
  const filter = useRef({ filter: "All" });
  const [_, forceUpdate] = useState(0);
  const setFilter = (newFilter: string) => {
    filter.current.filter = newFilter;
    forceUpdate((n) => n + 1);
  };
  const [displayCompanies, setDisplayCompanies] = useState<Company[]>(companies);
  const tableBodyRef = useRef<HTMLDivElement>(null);
  const lastRowRef = useRef<HTMLTableRowElement | null>(null);
  const firstRowRef = useRef<HTMLTableRowElement | null>(null);

  const industries = useMemo(() => {
    return Array.from(new Set(companies.map(company => company.industry))).sort();
  }, [companies]);

  const changeTable = (filter: string) => {
    const filteredCompanies = filter === 'All' 
      ? companies 
      : companies.filter(company => company.industry === filter);
    setDisplayCompanies(filteredCompanies);
  };

  const handleScroll = () => {
    if (lastRowRef.current && tableBodyRef.current&& firstRowRef.current) {
      let firstRect = firstRowRef.current.getBoundingClientRect()
      let lastRect = lastRowRef.current.getBoundingClientRect()
      let tableRect = tableBodyRef.current.getBoundingClientRect()
      if ((lastRect.bottom - 3) < tableRect.bottom) {
        setTimeout(() => {
          setScrollUpEnabled(false)
          setScrollDownEnabled(true)
        }, 500);
      } else if (firstRect.top === tableRect.top) {
        setTimeout(() => {
          setScrollDownEnabled(false)
          setScrollUpEnabled(true)
        }, 500);
      } else {
        setScrollDownEnabled(false)
        setScrollUpEnabled(false)
      }
    }
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); 
    };

    const tableBody = tableBodyRef.current;
    if (tableBody) {
      tableBody.addEventListener('touchmove', handleScroll);
      tableBody.addEventListener('scroll', handleScroll); 
      tableBody.style.transition = 'opacity 0s';
      tableBody.style.opacity = '0';
      tableBody.offsetHeight; 
      setTimeout(() => {
        tableBody.style.transition = 'opacity 375ms';
        tableBody.style.opacity = '1'; 
      }, 0);
    }

    return () => {
      if (tableBody) {
        tableBody.removeEventListener('touchmove', handleScroll);
        tableBody.removeEventListener('scroll', handleScroll);
      }
    };
  }, [displayCompanies]);

  return (
    <div className="w-4/5 h-screen flex flex-none justify-center items-center">
      <div className='w-full h-5/6 flex flex-col justify-center items-center gap-6 xl:gap-12 portrait:pb-24'>
        <div className={`w-full flex justify-between ${isMobile ? 'items-center flex-row' : 'justify-center  flex-col'}
         gap-6 xl:gap-12
        `}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-arya text-dark-green text-left
            text-tmd xl:text-tlg 2xl:text-txl
            ">
              Portfolio
            </h1>
          </div>
          <div className="pl-1">
            {/* Dropdown for portrait devices */}
            <div className={`${isMobile ? 'block' : 'hidden'} pt-1`}>
              <select
                id="industrySelect"
                onChange={(e) => {
                  setFilter(e.target.value);
                  changeTable(e.target.value);
                }}
                className="font-bitter text-sm w-20 p-1 border border-dark-green rounded bg-offwhite selection:border-dark-green focus:border-dark-green"
                value={filter.current.filter}
              >
                <option value="All">All</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
            {/* Button group for landscape devices */}
            <div className={`${isMobile ? 'hidden' : 'flex'} flex-wrap items-center justify-start gap-2 md:gap-4`}>
              <button
                id="All"
                onClick={() => {
                  setFilter("All");
                  changeTable("All");
                }}
                className="flex flex-row items-center justify-left font-bitter text-b4xs 2xl:text-b2xs filter"
              >
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 mr-2 sm:mr-3 rounded-sm ${
                    filter.current.filter === "All" ? "bg-offblack" : "bg-[#6D8A54] opacity-20"
                  }`}
                >
                  &nbsp;
                </div>
                All
              </button>
              {industries.map((industry) => (
                <button
                  key={industry}
                  id={industry}
                  onClick={() => {
                    if (filter.current.filter === industry) {
                      setFilter("All");
                      changeTable("All");
                    } else {
                      setFilter(industry);
                      changeTable(industry);
                    }
        
                  }}
                  className="flex flex-row items-center justify-center font-bitter text-b4xs 2xl:text-b2xs filter"
                >
                  <div
                    className={`w-2 h-2 sm:w-3 sm:h-3 mr-2 sm:mr-3 rounded-sm ${
                      filter.current.filter === industry ? "bg-offblack" : "bg-[#6D8A54] opacity-20"
                    }`}
                  >
                    &nbsp;
                  </div>
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={`flex flex-col w-full h-[60vh] sm:h-[70vh] overflow-y-auto ${isMobile ? 'mobile' : 'custom-scrollbar'}`}
          onMouseEnter={() => setScrollEnabled(false)}
          onMouseLeave={() => setScrollEnabled(true)}
          onTouchStart={() => setScrollEnabled(false)}
          onTouchEnd={() => setScrollEnabled(true)}
          ref={tableBodyRef}
        >
          <table className="min-w-full border-collapse">
            <tbody className='gap-3' id="table-body">
              {displayCompanies.map((company, index) => (
                <tr
                  key={company.company}
                  className="relative h-12 sm:h-16 landscape:custom-border-row table-row transition-all duration-300 rounded-lg hover:bg-dark-green hover:bg-opacity-10 
                  "
                  ref={(el) => {
                    if (index === 0) firstRowRef.current = el;
                    if (index === displayCompanies.length - 1) lastRowRef.current = el;
                  }}
                >
                  <td className="font-bitter font-normal align-top
                  w-[117px] xs:w-[122px] md:w-[162px] lg:w-[234px] xl:w-[244px] 2xl:w-[390px]
                  ">
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-dark-green pr-2 align-top hover:cursor-pointer hover:underline decoration-[1px]
                      text-b4xs md:text-b3xs lg:text-bxs 2xl:text-bmd
                    ">
                      <h3 className="min-w-[100px] align-top">{company.company}</h3>
                    </a>
                  </td>
                  <td className="text-dark-green font-bitter font-light px-2 align-top
                  text-b5xs md:text-b3xs xl:text-b2xs 2xl:text-bxs 2xl:leading-lg 
                  ">
                    <h3>{company.description}</h3>
                  </td>
                  {filter.current.filter === "All" && (
                    <td
                      className="text-dark-green font-bitter-italic font-light hidden px-2 align-top xl:table-cell 
                      xl:text-b2xs 2xl:text-bxs 2xl:leading-lg 
                    ">
                      <h3>{company.industry}</h3>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
};

export default PortfolioTable;
