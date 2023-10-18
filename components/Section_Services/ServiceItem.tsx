"use client";

type ServiceItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const ServiceItem = ({ icon, title, subtitle }: ServiceItemProps) => {
  return (
    <div className="flex flex-col md:flex-row p-3 items-center justify-center cursor-pointer group gap-3">
      <span className="text-fontColor group-hover:text-primary group-hover:rotate-[360deg] duration-1000 transition-all">
        {icon}
      </span>
      <div className="md:pt-4 text-center">
        <h2 className="text-base font-semibold text-fontColor group-hover:text-primary">
          {title}
        </h2>
        <p className="text-sm text-fontColor/80">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
