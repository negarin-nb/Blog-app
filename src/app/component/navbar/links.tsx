import React from "react";
import Link from "next/link";

interface LinkType {
  title: string;
  path: string;
}

export default function Links() {
  const links: LinkType[] = [
    {
      title: "blog",
      path: "/blog",
    },
    {
      title: "projects",
      path: "",
    },
    {
      title: "about",
      path: "",
    },
    {
      title: "newsletter",
      path: "",
    },
  ];

  return (
    <>
      {links.map((link: LinkType) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </>
  );
}
