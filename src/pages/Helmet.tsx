import { Helmet } from "react-helmet-async";

type HelmetElT = {
  path: string;
  title?: string;
  author?: string;
  keywords?: string;
  description: string;
  disAllowCrawler?: boolean;
};

const AppHelmet: React.FC<HelmetElT> = ({
  path,
  title,
  author,
  keywords,
  description,
  disAllowCrawler = false,
}) => {
  return (
    <Helmet>
      <meta
        name="keywords"
        content={`Yariga, properties for sale, properties for rent, ${
          keywords ? keywords : ""
        }`}
      />
      {author && <meta name="author" content={author} />}
      <title>Yariga{title ? ` | ${title}` : ""}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={"http://localhost:3000" + path} />

      {disAllowCrawler && <meta name="robots" content="noindex" />}
    </Helmet>
  );
};

export default AppHelmet;
