import { HelmetProvider as Provider } from "react-helmet-async";

type HelmetProviderProps = {
  children: React.ReactNode;
};

export function HelmetProvider({ children }: HelmetProviderProps) {
  return <Provider>{children}</Provider>;
}
