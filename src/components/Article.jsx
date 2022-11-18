export default function Article(props) {
  return (
    <>
      <article className="article__item">
        <h2 className="article__title">{props.article__title}</h2>
        <img className="article__img" src={props.article__img} alt="content-img1" />
        <p className="article__paragrah">{props.article__paragrah}</p>
      </article>
    </>
  );
}
