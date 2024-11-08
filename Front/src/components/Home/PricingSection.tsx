import { useState } from "react";
import { Check } from "lucide-react";
import pricingPlans from "../../utils/PricingData";
const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-center">
            Plans tarifaires
          </h2>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400 sm:text-center">
            Choisissez le plan parfait pour votre entreprise
          </p>
          <div className="relative self-center mt-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`${
                !isAnnual
                  ? "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600"
                  : "border border-transparent"
              } relative w-1/2 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`}
            >
              Facturation mensuelle
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`${
                isAnnual
                  ? "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-600"
                  : "border border-transparent"
              } ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`}
            >
              Facturation annuelle
            </button>
          </div>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700"
            >
              <div className="p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}€
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    /{isAnnual ? "an" : "mois"}
                  </span>
                </p>
                <p className="mt-4">
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {plan.lifetimePrice}€
                  </span>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    {" "}
                    à vie
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Paiement unique
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full cursor-pointer bg-gray-800 dark:bg-gray-200 border border-gray-800 dark:border-gray-200 rounded-md py-2 text-sm font-semibold text-white dark:text-gray-900 text-center hover:bg-gray-900 dark:hover:bg-gray-300"
                >
                  Acheter {plan.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white tracking-wide uppercase">
                  Ce qui est inclus
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex space-x-3">
                      <Check
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
