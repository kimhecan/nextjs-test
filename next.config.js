
const { NEXT_PUBLIC_NAMESPACE_ENV, NEXT_PUBLIC_COMMIT_SHA } = process.env;

const isNamespaceProduction = NEXT_PUBLIC_NAMESPACE_ENV === 'production';

const getAssetPrefix = () => {
  if (!isNamespaceProduction) {
    return '';
  } else {
    return  `https://next-example.s3.amazonaws.com/${NEXT_PUBLIC_COMMIT_SHA}`;
  }
};


module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: getAssetPrefix(),
}
