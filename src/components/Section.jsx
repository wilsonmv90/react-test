import Article from "../components/Article";
import img1 from "../assets/blog-img1.jpg";
import img2 from "../assets/blog-img3.jpg";
import img3 from "../assets/blog-img4.jpg";

export default function Section() {
  return (
    <>
      <section>
        <h1>nuestros productos</h1>
        <Article
          article__title="Chocolates"
          article__img={img1}
          article__paragrah="Los chocolates Evok son mezclas exóticas de frutas, hierbas y especias desde el 40% al 82% de cacao. Encuentra chocolates amargos y dulces en barra, estuches de bombones surtidos, nibs recubiertos y barras mini."
        />

        <Article
          article__title="Gummies"
          article__img={img2}
          article__paragrah="Las pastillas de goma (también denominadas gomitas en América o gominolas en España) son caramelos masticables dulces, elaborados a partir de gelatina animal a la que se le añaden edulcorantes, saborizantes y colorantes alimentarios. Llevan un acabado para que no se peguen entre sí, bien abrillantadas y con recubrimientos de azúcar o ácidos. Tienen infinidad de formas: ositos u otros animales, botellas de cola, dedos, ladrillos, anillos, frutas diversas, etc"
        />

        <Article
          article__title="trululu"
          article__img={img3}
          article__paragrah="Productos y precios de trululu. Descubre donde los puedes comprar más económicos. Trululu es una marca de productos de dulces y pasabocas y dulces."
        />
      </section>
    </>
  );
}
