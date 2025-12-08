import React from "react";
import { useParams } from "react-router-dom";

import {
  ANDROID_APP_DATA,
  IOS_APP_DATA,
  IONIC_APP_DATA,
  NATIVE_APP_DATA,
  HYBRID_APP_DATA,
  WINDOWS_APP_DATA,
} from "../data/Services/AndroidServiceData";

import {
  CMS_WEBSITE_DATA,
  WEBSITE_DESIGN_DATA,
  DYNAMIC_WEBSITE_DATA,
  ECOMMERCE_WEBSITE_DATA,
  WEB_DEVELOPMENT_DATA,
  WORDPRESS_DEVELOPMENT_DATA,
} from "../data/Services/WebServiceData";

import {
  SCHOOL_MANAGEMENT_DATA,
  WEB_HOSTING_DATA,
  PG_MANAGEMENT_DATA,
  HOSPITAL_MANAGEMENT_DATA,
} from "../data/Services/SoftwareServiceData";

import {
  SUPPORT_MAINTENANCE_DATA,
} from "../data/Services/SupportMaintenceData";

import {
  IT_OUTSOURCING_DATA,
} from "../data/Services/OutSourcing";





import CtaSection from "../Services/ServicesDesingTemplates/CTASection";
import HeroSection from "../Services/ServicesDesingTemplates/HeroSection";
import IntroSection from "../Services/ServicesDesingTemplates/IntroSection";
import BenefitsSection from "../Services/ServicesDesingTemplates/BenefitsGrid";
import ServicesSection from "../Services/ServicesDesingTemplates/ServicesGrid";
import ProcessSection from "../Services/ServicesDesingTemplates/ProcessTimeLine";
import WhyChooseSection from "../Services/ServicesDesingTemplates/WhyChooseUs";
import VerticalBar from "../AnimationObjects/VerticalBar";

export default function ServicePage() {
  const { serviceSlug } = useParams();

  const MOBILE_MAP = {
    "android-mobile-application": ANDROID_APP_DATA,
    "ios-mobile-application": IOS_APP_DATA,
    "ionic-mobile-application": IONIC_APP_DATA,
    "native-mobile-application": NATIVE_APP_DATA,
    "hybrid-mobile-application": HYBRID_APP_DATA,
    "windows-application": WINDOWS_APP_DATA,
  };

  const WEB_MAP = {
    "cms-website-development": CMS_WEBSITE_DATA,
    "website-design": WEBSITE_DESIGN_DATA,
    "dynamic-website-design": DYNAMIC_WEBSITE_DATA,
    "ecommerce-website-development": ECOMMERCE_WEBSITE_DATA,
    "custom-applications-development": WEB_DEVELOPMENT_DATA,
    "wordpress-website-design": WORDPRESS_DEVELOPMENT_DATA,
  };

  const SOFTWARE_MAP = {
    "hospital-management-software": HOSPITAL_MANAGEMENT_DATA,
    "paying-guest-management-software": PG_MANAGEMENT_DATA,
    "school-management-system": SCHOOL_MANAGEMENT_DATA,
    "web-hosting-solutions": WEB_HOSTING_DATA,
  };

  const SUPPORT_MAP = {
    "support-maintenance": SUPPORT_MAINTENANCE_DATA,
    "it-outsourcing-services": IT_OUTSOURCING_DATA,
  };

  const CURRENT_DATA =
    MOBILE_MAP[serviceSlug] || WEB_MAP[serviceSlug] || SOFTWARE_MAP[serviceSlug] || SUPPORT_MAP[serviceSlug];

  const SERVICE_NAME = serviceSlug.split("-")[0];

  if (!CURRENT_DATA) {
    return <div className="text-white p-20 text-center text-3xl">
      Service Not Found
    </div>
  }

  const hero = CURRENT_DATA.find(s => s.id === 1);
  const intro = CURRENT_DATA.find(s => s.id === 2);
  const benefits = CURRENT_DATA.find(s => s.id === 3);
  const services = CURRENT_DATA.find(s => s.id === 4);
  const process = CURRENT_DATA.find(s => s.id === 5);
  const whyChooseUs = CURRENT_DATA.find(s => s.id === 6);
  const cta = CURRENT_DATA.find(s => s.id === 7);

  return (
    <div className="w-full overflow-x-hidden">
      <VerticalBar serviceName={SERVICE_NAME} />

      <HeroSection data={hero} slug={serviceSlug} />
      <IntroSection data={intro} />
      <BenefitsSection data={benefits} />
      <ServicesSection data={services} />
      <ProcessSection data={process} />
      <WhyChooseSection data={whyChooseUs} />
      <CtaSection data={cta} />
    </div>
  );
}
