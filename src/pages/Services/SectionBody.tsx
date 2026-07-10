
const SectionBody = ({ services }) => {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div key={service.id} className="flex gap-5">
              
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-100 text-violet-600 flex-shrink-0">
                <Icon className="text-[18px]" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[16px] font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-relaxed text-[12px]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionBody;