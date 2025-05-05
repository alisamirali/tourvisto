import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { registerLicense } from "@syncfusion/ej2-base";

import type { Route } from "./+types/root";
import { RootNavbar, SEO } from "components";
import { HelmetProvider } from "./providers/HelmetProvider";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <SEO
            title="Tourvisto - Your Travel Companion"
            description="Discover amazing travel destinations and plan your perfect trip with Tourvisto. Find the best places to visit, travel tips, and personalized recommendations."
          />
          <Meta />
          <Links />
        </head>
        <body>
          <RootNavbar />
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </HelmetProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
