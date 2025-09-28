import fs from "fs";
import aboutData from "./src/data/about.json" assert { type: "json" };

const vercelConfig = {
  headers: [
    {
      source: "/assets/resume.pdf",
      headers: [
        { key: "Content-Type", value: "application/pdf" },
        {
          key: "Content-Disposition",
          value: `attachment; filename="${aboutData.name}_Resume.pdf"`
        }
      ]
    }
  ]
};

fs.writeFileSync("vercel.json", JSON.stringify(vercelConfig, null, 2));
console.log(`✅ vercel.json updated with ${aboutData.name}_Resume`);
