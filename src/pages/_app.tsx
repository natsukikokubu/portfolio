import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ComponentProps, useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import template from "@/assets/particlesjs-config.json";

export default function App({ Component, pageProps }: AppProps) {
  const params = template as ComponentProps<typeof Particles>["options"];
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <Component {...pageProps} />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={params}
      />
    </>
  );
}
