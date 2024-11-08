const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Prêt à vous lancer ?</span>
                <span className="block">
                  Commencez votre essai gratuit dès aujourd'hui.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Découvrez tout le potentiel de notre plateforme avec un essai
                gratuit de 14 jours. Aucune carte de crédit requise.
              </p>
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Inscrivez-vous gratuitement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
