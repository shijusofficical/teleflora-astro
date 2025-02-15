import React, { useState } from "react";
import IconArrowRight from "@icons/IconArrowRight";
import IconFacebook from "@icons/IconFacebook";
import IconInstagram from "@icons/IconInstagram";
import IconTiktok from "@icons/IconTiktok";
import IconYoutube from "@icons/IconYoutube";

import Collapse from "@components/Collapse";
import Dropdown from "@components/Dropdown";
import DropdownItem from "@components/DropdownItem";
import DropdownMenu from "@components/DropdownMenu";
import DropdownToggle from "@components/DropdownToggle";

interface NewsletterProps {
  className?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ className }) => {
  return (
    <div className={`newsletter ${className || ""}`}>
      <h5 className="title">Join The Club!</h5>
      <p className="text mt-3">
        Receive Teleflora emails and be the first to know about exclusive offers, promotions, and more.
      </p>
      <div className="mt-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="E-mail address" />
          <button className="btn btn-light" type="button">
            <IconArrowRight className="icon icon-flip" />
          </button>
        </div>
      </div>
      {/* Uncomment this if validation is required */}
      {/* <div className="invalid-feedback d-block mt-1 pt-3">
        Please enter a valid e-mail address
      </div> */}
    </div>
  );
};

const FooterView: React.FC = () => {
  const [activeCollapse, setActiveCollapse] = useState<number>(0);
  const [isSelectLanguageOpen, setIsSelectLanguageOpen] = useState<boolean>(false);

  const handleCollapse = (index: number) => {
    setActiveCollapse(activeCollapse === index ? 0 : index);
  };

  const toggleSelectLanguage = () => {
    setIsSelectLanguageOpen(!isSelectLanguageOpen);
  };

  return (
    <footer id="hideFooter">
      <div className="container">
        <div className="footer-panel">
          <div className="row">
            <div className="col-12">
              <div className="footer-nav">
                <div className="row">
                  {[
                    {
                      title: "Our Company",
                      links: [
                        "About Us",
                        "Careers",
                        "Our Services",
                        "Partnership Program",
                        "Affiliate Program",
                        "Become a Teleflora Florist",
                        "Feedback",
                      ],
                      collapseIndex: 1,
                    },
                    {
                      title: "Flower Guides",
                      links: [
                        "Corporate Gifting",
                        "Floral Facts & Inspiration",
                        "Gift Giving Guides",
                        "Sympathy & Funeral Guide",
                        "Wedding Flower Guide",
                      ],
                      collapseIndex: 2,
                    },
                    {
                      title: "Shop Teleflora",
                      links: [
                        "Find a Florist",
                        "Local Flower Delivery",
                        "Same-Day Flower Delivery",
                        "International Flower Delivery",
                        "Send Flowers to Mexico",
                        "Military Discount",
                        "First Responders Discount",
                        "Compra en Español",
                        "Acheter en Français",
                      ],
                      collapseIndex: 3,
                    },
                    {
                      title: "Shop By Category",
                      links: [
                        "Valentine's Day Flowers",
                        "Easter Flowers",
                        "Mother’s Day Flowers",
                        "Thanksgiving Flowers",
                        "Christmas Flowers",
                        "Funeral & Sympathy",
                        "Shop by Occasion",
                        "Birthday Flowers",
                        "Shop More Holidays",
                        "Seasonal Bouquets",
                      ],
                      collapseIndex: 4,
                    },
                    {
                      title: "Help",
                      links: [
                        "Order Status",
                        "Customer FAQs",
                        "Order & Delivery Info",
                        "Chat with an Expert",
                        "Contact Customer Service",
                        "Privacy Policy",
                        "UNSUBSCRIBE",
                        "Terms of Use",
                        "Sitemap",
                      ],
                      collapseIndex: 5,
                    },
                  ].map(({ title, links, collapseIndex }) => (
                    <div className="col-12 col-lg" key={collapseIndex}>
                      <div className="collapse-item">
                        <h3
                          className={`collapse-btn ${activeCollapse === collapseIndex ? "active" : ""}`}
                          onClick={() => handleCollapse(collapseIndex)}
                        >
                          {title}
                        </h3>
                        <Collapse isOpen={activeCollapse === collapseIndex}>
                          {links.map((link, i) => (
                            <p className="footer-link" key={i}>
                              <a href="#" className="nav-link">
                                {link}
                              </a>
                            </p>
                          ))}
                        </Collapse>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-brand">
            <a href="/">
              <img src="/images/teleflora-logo-sm.webp" width={50} height={50} alt="Teleflora Logo" />
            </a>
          </div>
          <div className="row my-8">
            <div className="col-12 col-lg-4">
              <div className="col-xl-9">
                <Newsletter className="d-none d-lg-block" />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="accepted-cards mt-4 mt-lg-0">
                <h5 className="title mb-3">Get Rewarded!</h5>
                <p className="mb-6 text">Earn rewards like discounts and free bouquets.</p>
                <div className="row align-items-center g-8 text-center justify-content-center justify-content-lg-start">
                  <div className="col-auto">
                    <a href="#">
                      <img src="/images/payment/reward.svg" width={230} height={25} alt="Rewards" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="socialmedia mt-10 mt-lg-0">
                <h5 className="title mb-3">Follow Us</h5>
                <p className="mb-6 text">Get the latest news and offers.</p>
                <div className="row justify-content-center justify-content-lg-start align-items-center gx-7">
                  {[
                    { href: "https://www.facebook.com/teleflora", Icon: IconFacebook },
                    { href: "https://www.instagram.com/", Icon: IconInstagram },
                    { href: "https://www.tiktok.com", Icon: IconTiktok },
                    { href: "https://www.youtube.com/teleflora", Icon: IconYoutube },
                  ].map(({ href, Icon }, i) => (
                    <div className="col-auto" key={i}>
                      <a href={href}>
                        <Icon className="icon md" />
                      </a>
                    </div>
                  ))}
                  <div className="col-auto">
                    <a href="https://apps.apple.com/us/app/teleflora-flower-delivery/id6443734812">
                      <img src="/images/social/app-store.png" width={112} height={46} alt="App Store" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 d-lg-none">
              <Newsletter className="mt-10" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-12 col-lg-auto">
              <p className="text">© Copyright 2025 Teleflora, All rights reserved.</p>
            </div>
            <div className="col-12 col-lg-auto d-none d-lg-block">
              <div className="row gx-lg-4">
                <div className="col-auto">
                  <Dropdown isOpen={isSelectLanguageOpen} toggle={toggleSelectLanguage} className="dropdown-light">
                    <DropdownToggle color="light" className="w-100" caret>
                      Select Language
                    </DropdownToggle>
                    <DropdownMenu className="w-100">
                      {["English", "French", "Spanish"].map((lang, i) => (
                        <DropdownItem key={i}>{lang}</DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
