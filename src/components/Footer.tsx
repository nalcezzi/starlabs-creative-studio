import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logoDark} alt="Starlabs" className="h-6" />
        <p className="text-sm text-muted-foreground">
          © 2025 Starlabs. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
