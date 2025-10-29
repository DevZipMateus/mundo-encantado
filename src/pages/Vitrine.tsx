import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Prevent scrolling on the main page
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="w-full" style={{ height: "calc(100vh - 80px)", overflow: "hidden" }}>
        <iframe 
          src="https://v4.egestor.com.br/vitrine/?s=lojamundoencantado"
          title="Demonstração de Vitrine"
          className="w-full h-full border-none block"
          style={{ height: "calc(100vh - 143px)" }}
        />
      </main>
    </div>
  );
};

export default Vitrine;
