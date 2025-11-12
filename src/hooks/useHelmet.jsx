import { Helmet } from "react-helmet-async";

const UseHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || TourNest BD</title>
    </Helmet>
  );
};

export default UseHelmet;
