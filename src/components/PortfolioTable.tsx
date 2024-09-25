import React, { useMemo, useState, useEffect, useRef } from 'react';

interface Company {
  company: string;
  industry: string;
  description: string;
  link: string;
}

interface PortfolioTableProps {
  proxyData: { filter: string };
  setFilter: (filter: string) => void;
  setScrollEnabled: (enabled: boolean) => void;
}

const PortfolioTable: React.FC<PortfolioTableProps> = ({ proxyData, setFilter, setScrollEnabled }) => {
  const companies = [
    { company: 'Accrue Savings', industry: 'Fintech', description: 'Save now, buy later', link: 'https://www.accruesavings.com/' },
    { company: 'AgentSync', industry: 'Fintech', description: 'Automating insurance compliance', link: 'https://agentsync.io/' },
    { company: 'Athelas', industry: 'Healthcare', description: 'Integrated healthcare operations platform', link: 'https://www.athelas.com/' },
    { company: 'Cal', industry: 'Infra', description: 'Open source scheduling infrastructure', link: 'http://cal.com' },
    { company: 'Clay', industry: 'SaaS', description: 'Scaling GTM with data enrichment and personalized outreach', link: 'http://clay.com' },
    { company: 'Cohere', industry: 'AI/ML', description: 'LLMs and RAG capabilities for enterprises', link: 'https://cohere.com/' },
    { company: 'Comfy', industry: 'AI/ML', description: 'The ComfyUI company', link: 'https://www.comfy.org/' },
    { company: 'ConductorAI', industry: 'Defense and Hardware', description: 'Automating government and defense compliance', link: 'https://conductorai.co/' },
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
    { company: 'Letta', industry: 'AI/ML', description: 'Long-term memory for AI agents', link: 'https://memgpt.ai/' },
    { company: 'Modelbit', industry: 'AI/ML', description: 'ML engineering platform for deploying models', link: 'https://www.modelbit.com/' },
    { company: 'Monad', industry: 'Crypto', description: 'Extreme parallelized performance for EVM', link: 'https://www.monad.xyz/' },
    { company: 'Nebra', industry: 'Crypto', description: 'Universal proof aggregation that scales ZKP verification', link: 'https://www.nebra.one/' },
    { company: 'Ollama', industry: 'AI/ML', description: 'Easiest way to get up and running with LLMs', link: 'https://ollama.com/' },
    { company: 'OpenMeter', industry: 'Developer', description: 'Open source AI and cloud metering for developers', link: 'https://openmeter.io/' },
    { company: 'Posthog', industry: 'Data', description: 'Open source product analytics', link: 'https://posthog.com/' },
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
    { company: 'Mixedbread', industry: 'AI/ML', description: 'End-to-end search pipeline ', link: 'https://www.mixedbread.ai/' },
    { company: 'Slingshot AI', industry: 'Healthcare', description: 'Increasing global access to mental healthcare', link: 'https://www.slingshot.xyz/' },
    { company: 'Salient Motion', industry: 'Defense and Hardware', description: 'Motion control systems for aerospace and defense ', link: 'https://www.salientmotion.com/' },
    { company: 'Zed', industry: 'Developer', description: 'High-performance, multiplayer code editor', link: 'https://zed.dev/' },
    { company: 'Inscribe', industry: 'Fintech', description: 'AI-powered workforce for risk teams at financial services companies', link: 'https://www.inscribe.ai/' },
    { company: 'Exo', industry: 'Crypto', description: 'Unify your everyday devices into one powerful GPU', link: 'https://github.com/exo-explore/exo' }
  ].sort((a, b) => a.company.localeCompare(b.company));
  const [displayCompanies, setDisplayCompanies] = useState<Company[]>(companies);
  const tableBodyRef = useRef<HTMLDivElement>(null);

  const industries = useMemo(() => {
    return Array.from(new Set(companies.map(company => company.industry))).sort();
  }, [companies]);

  const changeTable = (filter: string) => {
    const filteredCompanies = filter === 'All' 
      ? companies 
      : companies.filter(company => company.industry === filter);
    setDisplayCompanies(filteredCompanies);
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); 
    };

    const tableBody = tableBodyRef.current;
    if (tableBody) {
      tableBody.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (tableBody) {
        tableBody.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <div className="w-4/5 h-screen flex flex-col justify-center items-center gap-6 xl:gap-12">
      <div className='w-full flex flex-row sm:flex-col sm:gap-6 xl:gap-12 justify-between sm:justify-center items-center'>
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
              className="font-bitter text-base sm:text-lg w-24 p-2 border border-dark-green rounded bg-offwhite selection:border-dark-green focus:border-dark-green"
              value={proxyData.filter}
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
                  proxyData.filter === "All" ? "bg-offblack" : "bg-[#6D8A54] opacity-20"
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
                  setFilter(industry);
                  changeTable(industry);
                }}
                className="flex flex-row items-center justify-center font-bitter text-xs md:text-lg filter"
              >
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 mr-2 sm:mr-3 ${
                    proxyData.filter === industry ? "bg-offblack" : "bg-[#6D8A54] opacity-20"
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
      <div className="flex flex-col flex-shrink w-full h-3/5 sm:h-2/3 overflow-y-auto custom-scrollbar"
        onMouseEnter={() => setScrollEnabled(false)}
        onMouseLeave={() => setScrollEnabled(true)}  
        onTouchStart={() => setScrollEnabled(false)} 
        onTouchEnd={() => setScrollEnabled(true)}    
      >
        <table className="min-w-full border-collapse">
          <tbody className="font-bitter-italic text-sm sm:text-xl md:text-2xl" id="table-body">
            {displayCompanies.map((company) => (
              <tr
                key={company.company}
                className="relative h-12 sm:h-16 landscape:custom-border-row table-row transition-all duration-300"
              >
                <td className="font-bitter font-normal">
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.75rem] hover:cursor-pointer text-dark-green"
                  >
                    {company.company}
                  </a>
                </td>
                <td className="text-dark-green px-2 sm:px-4 font-bitter font-light text-xxs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                  {company.description}
                </td>
                {proxyData.filter === "All" && (
                  <td
                    className="text-dark-green px-2 sm:px-4 font-bitter-italic font-light hidden sm:table-cell sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                  >
                    {company.industry}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioTable;
