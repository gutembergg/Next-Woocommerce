import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../pages";
import { Container, Card, ImageBox, ImageContent } from "./styles";

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  const idString = String(product.id);

  return (
    <Container>
      {product && (
        <Card>
          <ImageBox>
            <ImageContent>
              <Image
                width={200}
                height={200}
                src={product.images[0].src}
                alt="product"
                objectFit="cover"
              />
            </ImageContent>
          </ImageBox>
          <div className="infos">
            {product.description && (
              <div dangerouslySetInnerHTML={{ __html: product?.description }} />
            )}

            <div>Price: {product.price}</div>
            <Link
              href={`/product/${product.slug}-${String(product.id)}`}
              passHref
            >
              <button type="button">View</button>
            </Link>
          </div>
        </Card>
      )}
    </Container>
  );
};

export default Product;
