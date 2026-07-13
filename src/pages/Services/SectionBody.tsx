
import style from "./Services.module.css";

const SectionBody = ({ services }) => {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div key={service.id} className="flex gap-5">
              
              {/* Icon */}
              <div className={style.sectionBodyIcon}>
                <Icon className="text-[18px]" />
              </div>

              {/* Content */}
              <div>
                <h3 className={style.sectionBodyContentTitle}>
                  {service.title}
                </h3>

                <p className={style.sectionBodyContentDesc}>
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