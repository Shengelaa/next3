"use client";

type Props = {
  params: { productid: string };
};

const ProductDetailsId = ({ params }: Props) => {
  console.log(params.productid);
  return <div>ProductDetailsId: {params.productid}</div>;
};

export default ProductDetailsId;
