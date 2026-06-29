import { createFileRoute } from "@tanstack/react-router";
import team from "@/assets/team.jpg.asset.json";
import combo from "@/assets/combo_pistachio.webp.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cheezy Bizerte" },
      { name: "description", content: "The story of Cheezy: a family bakery and café in Bizerte, baking fresh every day since 2022." },
      { property: "og:title", content: "About Cheezy" },
      { property: "og:description", content: "A family bakery in Bizerte, baking fresh since 2022." },
      { property: "og:image", content: team.url },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Since 2022</p>
        <h1 className="font-display text-5xl sm:text-7xl font-semibold text-balance">
          A bakery built by hand,<br /><span className="italic text-accent">one morning at a time.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Cheezy is a family-run bakery and juice bar in Bizerte. We bake fresh every
          morning, press our juices to order, and pull every espresso with care.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 grid md:grid-cols-2 gap-6">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden">
          <img src={team.url} alt="The Cheezy team" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[4/5] rounded-3xl overflow-hidden">
          <img src={combo.url} alt="Pistachio cheesecake" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          {[
            { t: "Real ingredients", d: "Whole foods, local where we can. No shortcuts, no fake flavors." },
            { t: "Baked daily", d: "Pastries, cookies, breads — out of the oven every morning." },
            { t: "Welcoming room", d: "Soft seating, fast wifi, the kind of place you stay in." },
          ].map((v) => (
            <div key={v.t}>
              <h3 className="font-display text-2xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
