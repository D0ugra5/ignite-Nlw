import { Button } from "./Button";

interface Arrayprops {
  arrayGenres: GenreResponseProps[];

  ValueGenreId: number;
  fhandleClickButton: (id: number) => void;
}
interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
export function SideBar(props: Arrayprops) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.arrayGenres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.fhandleClickButton(genre.id)}
            selected={props.ValueGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
