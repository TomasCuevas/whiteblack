import Head from "next/head";

//* interface *//
interface Props {
  description: string;
  image: string;
  keywords?: string;
  title: string;
}

export const LayoutHead: React.FC<Props> = ({
  description,
  image,
  keywords = "",
  title,
}) => {
  const DOMAIN = "https://whiteblack.vercel.app";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${DOMAIN}${image}`} />
      <meta property="og:image:secure_url" content={`${DOMAIN}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={DOMAIN} />
      <meta property="twitter:url" content={DOMAIN} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${DOMAIN}${image}`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
    </Head>
  );
};
