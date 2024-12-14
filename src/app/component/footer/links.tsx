import React from "react";
import Link from "next/link";

interface LinkType {
  title: string;
  path: string;
}

export default function Links() {
  const links: LinkType[] = [
    {
      title: "Twitter",
      path: "/blog",
    },
    {
      title: "LinkeIn",
      path: "",
    },
    {
      title: "Email",
      path: "",
    },
    {
      title: "RSS feed",
      path: "",
    },
    {
      title: "add to Feedly",
      path: "",
    },
  ];

  return (
    <>
      {links.map((link: LinkType) => (
        <Link className="text-center " href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </>
  );
}
