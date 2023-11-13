import type {LinksFunction} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import TeadsHeaderComponent from "~/components/basics/teads-header.component";
import globalCss from "~/global.css";

export const links: LinksFunction = () => {
    console.log("globalCss", globalCss)
    return [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
            },
            {
                rel: "preconnect", href: "https://fonts.gstatic.com"
            },
            {
                rel: "preconnect", href: "https://fonts.googleapis.com"
            },
            {
                rel: "stylesheet", href: globalCss
            },
    ]
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>
            Welcome to Console Ad Manager Remix Version
        </title>
      </head>
      <body>
        <TeadsHeaderComponent/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
