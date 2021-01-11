import React from "react";
import "./style.css";

export default function About() {

  return (
    <div className="About-style">
      <h1>About - My Awesome Image Repo</h1>

      <p>This image repository was built in React.js and Node, and it is destined for the Shopify selective process (Summer 2021 - Shopify Developer Intern Challenge Question).</p>

      <p>Using this repository, registered and logged users can post (add), edit and delete images associated with their accounts.</p>

      <p> The text data are stored in PostgreSQL, while the images are stored in S3 (AWS).</p>

    </div>
  );
}