export function Logo({ className = "h-8", src = "/logo.webp", loading = "eager" }: { className?: string; src?: string; loading?: "eager" | "lazy" }) {
  return (
    <img
      src={src}
      alt="Logotip Adna Cosmetics – kozmetični salon Vrhnika"
      width={480}
      height={319}
      loading={loading}
      decoding="async"
      className={`object-contain ${className}`}
    />
  );
}
