/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "free4kwallpapers.com",
      "jsonkeeper.com",
      "images.squarespace-cdn.com",
      "a0.muscache.com",
      "images.squarespace-cdn.com",
      "news.airbnb.com",
      "media.architecturaldigest.com",
      "media.gq.com",
      "media.architecturaldigest.com",
      "cdn.home-designing.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoieGV0aGFuIiwiYSI6ImNsNTkwc3M3aDI1OWUzZW10cWd6d2NpaHoifQ.NrAPo5QXXgKR79jWJhOxUA",
  },
};
