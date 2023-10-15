import React from "react";
import { Link } from "@mui/material";
import { links } from "../constant";

const SocialMedia = () => {
  return (
    <section className="flex justify-center gap-5">
      {links.map(({ url, Icon }) => (
        <Link href={url}>
          <Icon style={{ color: "white" }} />
        </Link>
      ))}
    </section>
  );
};

export default SocialMedia;
