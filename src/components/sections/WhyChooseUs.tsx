

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="border-8 border-primary p-4 inline-block">
            <img 
              src="/choose.jpg" 
              alt="Loader" 
              className="w-full max-w-md"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight uppercase">
            Why You Should <br /> Choose Us
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            Arosam Plant and Hire provides top-tier machinery and expert support to ensure your project's success. Our commitment to quality and safety is unmatched in the industry.
          </p>

          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {[
              { label: "Project Completed", val: "100+" },
              { label: "Unique Customers", val: "72+" },
              { label: "Equipment Fleet", val: "30+" },
              { label: "Branch Location", val: "5+" }
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl font-black text-primary mb-2">{stat.val}</h3>
                <p className="text-gray-500 font-bold text-sm uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
