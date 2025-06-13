import { Cluster } from "./Cluster";
import ne1 from "../assets/ne_1.png";
import ne2 from "../assets/ne_2.png";
import ne3 from "../assets/ne_3.png";
import bb1 from "../assets/bb_1.png";
import bb2 from "../assets/bb_2.png";
import bb3 from "../assets/bb_3.png";
import dc1 from "../assets/dc_1.png";
import dc2 from "../assets/dc_2.png";
import dc3 from "../assets/dc_3.png";
import js from "../assets/skill-icons/js.svg";
import react from "../assets/skill-icons/react.svg";
import ts from "../assets/skill-icons/ts.svg";
import mongo from "../assets/skill-icons/mongo.svg";
import express from "../assets/skill-icons/express.svg";
import webpack from "../assets/skill-icons/webpack.svg";
import cs from "../assets/skill-icons/cs.svg";
import gcp from "../assets/skill-icons/gcp.svg";
import godot from "../assets/skill-icons/godot.svg";
import graphql from "../assets/skill-icons/graphql.svg";
import tailwind from "../assets/skill-icons/tailwind.svg";

export function Clusters() {
  return (
    <div className="p-4 bg-orange-100 rounded-2xl">
      <h3 className="text-[36px] border-b-8 border-orange-400 pb-5 mb-8 font-bold text-center text-gray-700">
        Projects
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        <Cluster
          name="Drops"
          description="Drops is an app created with React that allows user with diabetes to track various health metrics and set reminders for medication."
          imgPrimary={dc1}
          imgSecondary={dc2}
          imgTertiary={dc3}
          link={"https://github.com/jahorwitz/drops"}
          skills={[react, ts, tailwind, graphql]}
        ></Cluster>
        <Cluster
          name="NewsExplorer"
          description="A project created with React and Vite that allows visitors to search for news articles and save them to their personal profile."
          imgPrimary={ne1}
          imgSecondary={ne2}
          imgTertiary={ne3}
          link={"https://yournewsexplorer.crabdance.com/"}
          skills={[react, js, express, mongo]}
          repoLink={"https://github.com/Aivaxela/news_explorer_frontend"}
        ></Cluster>
        <Cluster
          name="Beach Bandits"
          description="Beach Bandits is a tool that allows you to create an optimal route between selected beaches in Florida. This project was created in 2 weeks for the June 2024 TripleTen Code Jam."
          imgPrimary={bb1}
          imgSecondary={bb2}
          imgTertiary={bb3}
          link={"https://aivaxela.github.io/beach-bandits/"}
          skills={[js, webpack]}
          repoLink={"https://github.com/Aivaxela/beach-bandits"}
        ></Cluster>
      </div>
    </div>
  );
}
