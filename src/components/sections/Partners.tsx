

const Partners = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
        {['MATUSKA', 'BITSTREAM', 'KAVANA', 'PLANNER'].map((name) => (
          <span key={name} className="text-3xl font-black tracking-tighter">{name}</span>
        ))}
      </div>
    </section>
  );
};

export default Partners;
