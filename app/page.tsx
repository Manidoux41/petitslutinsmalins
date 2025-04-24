// 📁 app/page.tsx
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="bg-pink-50 min-h-screen">
      {/* Bannière principale */}
      <section className="bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Bienvenue chez Petits Lutins Malin !</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Des produits malins, colorés et magiques pour les enfants de 0 à 7 ans.
        </p>
        <Link href="/boutique" className="inline-block bg-white text-pink-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-pink-100">
          Découvrir la boutique
        </Link>
      </section>

      {/* Catégories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Nos univers enchantés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CategoryCard
            image="https://picsum.photos/seed/jouets/600/400"
            title="Jouets éducatifs"
            href="/boutique?categorie=jouets"
          />
          <CategoryCard
            image="https://picsum.photos/seed/vetements/600/400"
            title="Vêtements adorables"
            href="/boutique?categorie=vetements"
          />
          <CategoryCard
            image="https://picsum.photos/seed/deco/600/400"
            title="Décoration magique"
            href="/boutique?categorie=deco"
          />
        </div>
      </section>

      {/* Produits en vedette */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Nos coups de cœur ✨</h2>
        {/* Tu pourras mapper ici les produits vedettes depuis ta base */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeaturedProduct
            image="https://picsum.photos/seed/magique1/600/400"
            title="Cube magique éducatif"
            price={29.99}
            href="/produit/cube-magique"
          />
          <FeaturedProduct
            image="https://picsum.photos/seed/lapin/600/400"
            title="Combinaison lapin rose"
            price={19.99}
            href="/produit/combinaison-lapin"
          />
          <FeaturedProduct
            image="https://picsum.photos/seed/guirlande/600/400"
            title="Guirlande lumineuse féérique"
            price={14.99}
            href="/produit/guirlande-lumineuse"
          />
        </div>
      </section>
    </main>
  )
}

function CategoryCard({ image, title, href }: { image: string; title: string; href: string }) {
  return (
    <Link href={href} className="block rounded-xl overflow-hidden shadow hover:shadow-xl transition">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
      <div className="bg-white p-4 text-center">
        <h3 className="text-xl font-semibold text-pink-600">{title}</h3>
      </div>
    </Link>
  )
}

function FeaturedProduct({ image, title, price, href }: { image: string; title: string; price: number; href: string }) {
  return (
    <Link href={href} className="block border rounded-xl overflow-hidden shadow hover:shadow-xl transition">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-pink-600 font-bold text-lg">{price.toFixed(2)} €</p>
      </div>
    </Link>
  )
}
