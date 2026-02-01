interface BlogHeroProps {
  title: string
  subtitle?: string
}

export function BlogHero({ title, subtitle }: BlogHeroProps) {
  return (
    <section
      className="w-full py-16 md:py-24 bg-life-text text-white font-sora"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
