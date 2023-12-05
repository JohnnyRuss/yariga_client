import { Helmet } from "react-helmet-async";
import { APP_ORIGIN } from "config/env";

type HelmetElT = {
  title: string;
  description: string;
  author?: string;
  image?: string;
  type?: "website" | "article" | "video" | "music" | "profile" | "place";
  path: string;
  disAllowCrawler?: boolean;
};

const AppHelmet: React.FC<HelmetElT> = ({
  title,
  description,
  author,
  image,
  type = "website",
  path,
  disAllowCrawler = false,
}) => {
  return (
    <Helmet>
      {/* TITLE */}
      <title>Yariga{title ? ` | ${title}` : ""}</title>
      <meta
        property="og:title"
        content={`Yariga${title ? ` | ${title}` : ""}`}
      />

      {/* DESCRIPTION */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      {/* AUTHOR */}
      {author && <meta name="author" content={author} />}

      {/* IMAGE */}
      <meta property="og:image" content={image || "/logo.svg"} />

      {/* TYPE */}
      <meta property="og:type" content={type} />

      {/* PATH */}
      <link rel="canonical" href={`${APP_ORIGIN}${path}`} />
      <meta property="og:url" content={`${APP_ORIGIN}${path}`} />

      {disAllowCrawler && <meta name="robots" content="noindex" />}
    </Helmet>
  );
};

export default AppHelmet;
