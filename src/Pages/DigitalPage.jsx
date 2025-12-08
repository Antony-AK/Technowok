import React from "react";
import { useParams } from "react-router-dom";


import { BRANDING_IDENTITY_DATA } from "../data/Digital/BrandingIdentityData";
import { DIGITAL_MARKETING_DATA } from "../data/Digital/ContentMarketing";
import { GRAPHIC_DESIGN_DATA } from "../data/Digital/GraphicDesignData";
import { SEO_CONTENT_WRITING_DATA } from "../data/Digital/SEOContentWriting";
import { SEO_SERVICE_DATA } from "../data/Digital/SEOServiceData";
import { SOCIAL_MEDIA_MARKETING_DATA } from "../data/Digital/SocialMediaMarketing";


import DigitalHero from "../DigitalDesignTemps/DigitalHero";
import DigitalIntro from "../DigitalDesignTemps/DigitalIntro";
import DigitalBenefitsSection from "../DigitalDesignTemps/DigitalBenefitsSection";
import DigitalServicesMatrix from "../DigitalDesignTemps/DigitalServicesMatrix";
import DigitalProcessFlow from "../DigitalDesignTemps/DigitalProcessFlow";
import DigitalWhyChooseForceField from "../DigitalDesignTemps/DigitalWhyChooseForceField";
import WhyChooseSection from "../Services/ServicesDesingTemplates/WhyChooseUs";
import CtaSection from "../Services/ServicesDesingTemplates/CTASection";

const DIGITAL_MAP = {
    "branding-identity": BRANDING_IDENTITY_DATA,
    "graphic-design": GRAPHIC_DESIGN_DATA,
    "social-media-marketing": SOCIAL_MEDIA_MARKETING_DATA,
    "content-marketing": DIGITAL_MARKETING_DATA,
    "search-engine-optimization-seo": SEO_SERVICE_DATA,
    "search-engine-copywriting": SEO_CONTENT_WRITING_DATA,


};


export default function DigitalPage() {
    const { digitalSlug } = useParams();

    const CURRENT_DATA = DIGITAL_MAP[digitalSlug];

    if (!CURRENT_DATA) {
        return (
            <div className="text-white p-20 text-center text-3xl">
                Digital Service Not Found
            </div>
        );
    }


    const hero = CURRENT_DATA.find(s => s.id === 1);
    const intro = CURRENT_DATA.find(s => s.id === 2);
    const benefits = CURRENT_DATA.find(s => s.id === 3);
    const services = CURRENT_DATA.find(s => s.id === 4);
    const process = CURRENT_DATA.find(s => s.id === 5);
    const whyChooseUs = CURRENT_DATA.find(s => s.id === 6);
    const cta = CURRENT_DATA.find(s => s.id === 7);




    return (
        <div className="w-full overflow-hidden">
            <DigitalHero data={hero} slug={digitalSlug} />
            <DigitalIntro data={intro} />
            <DigitalBenefitsSection data={benefits} />
            <DigitalServicesMatrix data={services} />
            <DigitalProcessFlow data={process} />
            <WhyChooseSection data={whyChooseUs} />
            <CtaSection data={cta} />
        </div>
    );
}