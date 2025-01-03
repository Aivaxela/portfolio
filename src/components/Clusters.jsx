import { Cluster } from "./Cluster";
import ne1 from "../assets/ne_1.png";
import ne2 from "../assets/ne_2.png";
import ne3 from "../assets/ne_3.png";

export function Clusters() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Cluster
        name="NewsExplorer"
        description="A project created with React and Vite that allows visitors to search for news articles and save them to their personal profile"
        imgPrimary={ne1}
        imgSecondary={ne2}
        imgTertiary={ne3}
      ></Cluster>
      <Cluster
        name="NewsExplorer"
        description="A project created with React and Vite that allows visitors to search for news articles and save them to their personal profile"
        imgPrimary={ne1}
        imgSecondary={ne2}
        imgTertiary={ne3}
      ></Cluster>
      <Cluster
        name="NewsExplorer"
        description="A project created with React and Vite that allows visitors to search for news articles and save them to their personal profile"
        imgPrimary={ne1}
        imgSecondary={ne2}
        imgTertiary={ne3}
      ></Cluster>
    </div>
  );
}
