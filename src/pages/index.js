import ImageGallery from "react-image-gallery";
import fs from "fs/promises";
import path from "path";

export async function getStaticProps(context) {
  const imageFiles = await fs.readdir("./public/images/");
  const images = imageFiles.map((f) => ({ original: `/images/${f}` }));

  return {
    props: { images }, // will be passed to the page component as props
  };
}

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

export default function HomePage({ images }) {
  return <ImageGallery items={images} />;
}
