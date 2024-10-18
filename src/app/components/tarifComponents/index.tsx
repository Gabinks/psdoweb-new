"use client";

import SiteBlog from "../siteBlog";
import SiteCommerce from "../siteCommerce";
import SiteEntreprise from "../siteEntreprise";
import SiteEvenementiel from "../siteEvenementiel";
import SiteForum from "../siteForum";
import SiteReservation from "../siteReservation";
import SiteVitrine from "../siteVitrine";

export default function Tarif() {
  return (
    <section className="p-8">
        <h2 className="text-6xl font-bold mb-8 text-center below-lg:m-14 below-xg:text-4xl">
        Trouver le site qui vous correspond
        </h2>
        <div className="space-y-6">
            <SiteVitrine/>
            <SiteCommerce/>
            <SiteBlog/>
            <SiteEntreprise/>
            <SiteForum/>
            <SiteEvenementiel/>
            <SiteReservation/>
        </div>
    </section>
  );
}
