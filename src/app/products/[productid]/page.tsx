import { Metadata } from "next";
import Card from "@/component/card";
import ProductDetailsId from "@/component/ProductDetailsId";

type Props = {
  params: {
    productid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productid}`,
    keywords: `product, ${params.productid}`,
    description: `this is product description`,
    openGraph: {
      title: `OG title`,
      description: "OG description",
      url: "https://tafli.ge",
    },
  };
};

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <ProductDetailsId params={params} />
      <h1>Product Detail page is : {params.productid}</h1>
    </div>
  );
};

export default ProductDetails;
