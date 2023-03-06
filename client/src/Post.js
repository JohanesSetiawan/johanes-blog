export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-1125071391-e1677975112261.jpg?w=430&h=230&crop=1"></img>
      </div>
      <div className="texts">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p className="info">
          <span className="author">Johanes Setiawan</span>
          <time>2023-03-05 23:50</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          efficitur odio, at aliquet leo interdum nec. Aliquam sit amet.
        </p>
      </div>
    </div>
  );
}
