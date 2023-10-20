/**
 * The internal imports
 */
import Card from "../components/card/card";
import { IconTypes } from "@/components/button/button"

const Home = () => (
    <div className="container pb-80">
      <Card
            label="Product Reviews"
            title="Class aptent taciti socio squad litoral torquent per conubia nostra"
            summary="Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim."
            href="#"
            btnIcon={ IconTypes.ARROW_RIGHT }
            // btnLabel={}
            className="mb-30"
          />
      <div className="row">
        <div className="col col_4 m-mw-100">
          <Card
            label="Opinions"
            title="Class aptent taciti socio squad litoral torquent per conubia nostra"
            summary="Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim."
            href="#"
            btnIcon={ IconTypes.ARROW_RIGHT }
            // btnLabel={}
            className="mb-30"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Product Reviews"
            title="Class aptent taciti socio squad litoral torquent per conubia nostra"
            summary="Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim."
            href="#"
            btnIcon={ IconTypes.ARROW_RIGHT }
            // btnLabel={}
            className="mb-30"
          />
        </div>
        <div className="col col_4 m-mw-100">
          <Card
            label="Travels Guides"
            title="Class aptent taciti socio squad litoral torquent per conubia nostra"
            summary="Mauris Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, enim."
            href="#"
            btnIcon={ IconTypes.ARROW_RIGHT }
            // btnLabel={}
            className="mb-30"
          />
        </div>
      </div>
    </div>
  )

export default Home;
