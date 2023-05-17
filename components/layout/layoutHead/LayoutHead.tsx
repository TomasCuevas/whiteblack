import Head from "next/head";

//* interface *//
interface Props {
  description: string;
  image?: string;
  keywords?: string;
  title: string;
}

export const LayoutHead: React.FC<Props> = ({
  description,
  image,
  keywords = "",
  title,
}) => {
  const IMAGE_DEFAULT =
    "https://user-images.githubusercontent.com/79057608/238053378-cecb816d-22db-4f9e-ac2c-fff7771fd3cd.png";
  const DOMAIN = "https://whiteblack.vercel.app";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : IMAGE_DEFAULT} />
      <meta
        property="og:image:secure_url"
        content={image ? image : IMAGE_DEFAULT}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={DOMAIN} />
      <meta property="twitter:url" content={DOMAIN} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ? image : IMAGE_DEFAULT} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};
