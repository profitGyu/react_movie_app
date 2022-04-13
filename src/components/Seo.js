import { Helmet } from "react-helmet";

function Seo({title}) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
export default Seo;
