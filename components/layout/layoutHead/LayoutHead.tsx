import Head from "next/head";
import { useRouter } from "next/router";

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
  const DOMAIN = process.env.NEXT_PUBLIC_URL;
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={`${DOMAIN}${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${DOMAIN}${image}`} />
      <meta property="og:image:secure_url" content={`${DOMAIN}${image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={`${DOMAIN}${router.asPath}`} />
      <meta property="twitter:url" content={`${DOMAIN}${router.asPath}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${DOMAIN}${image}`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
    </Head>
  );
};
