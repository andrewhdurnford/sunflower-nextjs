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
  currentPage: number;
}

const PortfolioTable: React.FC<PortfolioTableProps> = ({ setScrollEnabled, setScrollUpEnabled, setScrollDownEnabled, currentPage }) => {
  const companies = [
    { company: 'Accrue Savings', industry: 'Fintech', description: 'Save now, buy later', link: 'https://www.accruesavings.com/' },
    { company: 'AgentSync', industry: 'Fintech', description: 'Automating insurance compliance', link: 'https://agentsync.io/' },
    { company: 'Commure (Athelas)', industry: 'Healthcare', description: 'Integrated healthcare operations platform', link: 'https://www.commure.com/' },
    { company: 'Cal', industry: 'Infra', description: 'Open source scheduling infrastructure', link: 'http://cal.com' },
    { company: 'Clay', industry: 'SaaS', description: 'Scaling GTM with data enrichment and personalized outreach', link: 'http://clay.com' },
    { company: 'Cohere', industry: 'AI/ML', description: 'LLMs and RAG capabilities for enterprises', link: 'https://cohere.com/' },
    { company: 'Comfy', industry: 'AI/ML', description: 'The ComfyUI company', link: 'https://www.comfy.org/' },
    { company: 'Conductor AI', industry: 'Defense and Hardware', description: 'Automating government and defense compliance', link: 'https://conductorai.co/' },
    { company: 'DBT', industry: 'Data', description: 'Transforming data in your warehouse', link: 'https://www.getdbt.com/' },
    { company: 'Deel', industry: 'SaaS', description: 'Powering the future of global HR', link: 'https://www.deel.com/' },
    { company: 'E2B', industry: 'AI/ML', description: 'Code interpreting for AI apps', link: 'https://e2b.dev/' },
    { company: 'Footprint', industry: 'Security', description: 'KYC and identity verification', link: 'http://onefootprint.com' },
    { company: 'Freshpaint', industry: 'Healthcare', description: 'Enabling patient privacy and HIPAA compliance', link: 'https://www.freshpaint.io/' },
    { company: 'Gem', industry: 'SaaS', description: 'Recruiting with speed and efficiency', link: 'https://www.gem.com/' },
    { company: 'Great Expectations', industry: 'Data', description: 'Open source data quality and collaboration', link: 'https://greatexpectations.io/' },
    { company: 'Hadrian', industry: 'Defense and Hardware', description: 'Manufacturing the future', link: 'https://www.hadrian.co/' },
    { company: 'Houm', industry: 'Fintech', description: 'Real estate marketplace for Latin America', link: 'https://www.houm.com/' },
    { company: 'Knock', industry: 'Infra', description: 'Flexible, reliable notifications infrastructure', link: 'https://knock.app/' },
    { company: 'Letta', industry: 'AI/ML', description: 'Long-term memory for AI agents', link: 'https://www.letta.com/' },
    { company: 'Monad', industry: 'Crypto', description: 'Extreme parallelized performance for EVM', link: 'https://www.monad.xyz/' },
    { company: 'Nebra', industry: 'Crypto', description: 'Universal proof aggregation that scales ZKP verification', link: 'https://www.nebra.one/' },
    { company: 'Ollama', industry: 'AI/ML', description: 'Easiest way to get up and running with LLMs', link: 'https://ollama.com/' },
    { company: 'PostHog', industry: 'Data', description: 'Open source product analytics', link: 'https://posthog.com/' },
    { company: 'Project Discovery', industry: 'Security', description: 'Open source vulnerability scanning', link: 'https://projectdiscovery.io/' },
    { company: 'Railway', industry: 'Infra', description: 'Deploy software instantly at scale', link: 'https://railway.app/' },
    { company: 'Readyset', industry: 'Infra', description: 'SQL caching engine', link: 'https://readyset.io/' },
    { company: 'Responsive', industry: 'Infra', description: 'Managed Kafka Streams', link: 'https://responsive.dev/' },
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
    { company: 'Unkey', industry: 'Developer', description: 'Redefining API management', link: 'https://www.unkey.com/' },
    { company: 'Vercel', industry: 'Developer', description: 'The frontend cloud for a faster, personalized web', link: 'https://vercel.com/' },
    { company: 'Verkada', industry: 'Defense and Hardware', description: 'Integrated physical security platform', link: 'https://www.verkada.com/' },
    { company: 'Warp', industry: 'Developer', description: 'The modern terminal, reimagined with AI', link: 'https://www.warp.dev/' },
    { company: 'Xata', industry: 'Infra', description: 'Serverless data platform for PostgreSQL', link: 'https://xata.io/' },
    { company: 'Slingshot AI', industry: 'Healthcare', description: 'Increasing global access to mental healthcare', link: 'https://www.slingshot.xyz/' },
    { company: 'Salient Motion', industry: 'Defense and Hardware', description: 'Motion control systems for aerospace and defense ', link: 'https://www.salientmotion.com/' },
    { company: 'Inscribe', industry: 'Fintech', description: 'AI-powered workforce for risk teams at financial services companies', link: 'https://www.inscribe.ai/' },
    { company: 'Exo', industry: 'Crypto', description: 'Unify your everyday devices into one powerful GPU', link: 'https://github.com/exo-explore/exo' },
    { company: 'Pika', industry: 'SaaS', description: 'Front office for residential services', link: 'https://withpika.com/' },
    { company: 'TipLink', industry: 'Crypto', description: 'The simplest Solana wallet', link: 'https://tiplink.io/' },
    { company: 'Pocket Protector', industry: 'Crypto', description: 'Discover, follow, and copy top traders', link: 'https://www.pocketprotector.xyz/' },
    { company: 'StrongDM', industry: 'Security', description: 'Zero trust privileged access', link: 'https://www.strongdm.com/' }
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
        }, 1000);
      } else if (firstRect.top === tableRect.top) {
        setTimeout(() => {
          setScrollDownEnabled(false)
          setScrollUpEnabled(true)
        }, 1000);
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
        <div className="w-full flex flex-row sm:flex-col sm:gap-6 xl:gap-12 justify-between sm:justify-center items-center">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-arya text-dark-green text-5xl sm:text-6xl lg:text-7xl leading-none portrait:text-left">Portfolio</h1>
          </div>
          <div className="sm:w-full pl-1">
            {/* Dropdown for portrait devices */}
            <div className="block sm:hidden pt-1">
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
            <div className="hidden sm:flex flex-wrap items-center justify-start gap-2 md:gap-4">
              <button
                id="All"
                onClick={() => {
                  setFilter("All");
                  changeTable("All");
                }}
                className="flex flex-row items-center justify-left font-bitter text-xs md:text-lg filter"
              >
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 mr-2 sm:mr-3 ${
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
                  className="flex flex-row items-center justify-center font-bitter text-xs md:text-lg filter"
                >
                  <div
                    className={`w-2 h-2 sm:w-3 sm:h-3 mr-2 sm:mr-3 ${
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
        <div className="flex-grow flex flex-col w-full max-h-[60vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar"
          onMouseEnter={() => setScrollEnabled(false)}
          onMouseLeave={() => setScrollEnabled(true)}
          onTouchStart={() => setScrollEnabled(false)}
          onTouchEnd={() => setScrollEnabled(true)}
          ref={tableBodyRef}
        >
          <table className="min-w-full border-collapse">
            <tbody className="font-bitter-italic text-sm sm:text-xl md:text-2xl" id="table-body">
              {displayCompanies.map((company, index) => (
                <tr
                  key={company.company}
                  className="relative h-12 sm:h-16 landscape:custom-border-row table-row transition-all duration-300"
                  ref={(el) => {
                    if (index === 0) firstRowRef.current = el;
                    if (index === displayCompanies.length - 1) lastRowRef.current = el;
                  }}
                >
                  <td className="font-bitter font-normal">
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.75rem] hover:cursor-pointer text-dark-green"
                    >
                      <h3>{company.company}</h3>
                    </a>
                  </td>
                  <td className="text-dark-green px-2 sm:px-4 font-bitter font-light text-xxs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                    <h3>{company.description}</h3>
                  </td>
                  {filter.current.filter === "All" && (
                    <td
                      className="text-dark-green px-2 sm:px-4 font-bitter-italic font-light hidden sm:table-cell sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                    >
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
