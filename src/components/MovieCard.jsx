import {Link} from 'react-router-dom';

function MovieCard({id, title}) {
  
  return (
    <article>
      {/* What should go here? */}
        <h2>
          <Link to={`/movies/${id}`}>{title}</Link>
        </h2>

    </article>
  );
};

export default MovieCard;