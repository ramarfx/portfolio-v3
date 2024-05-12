import SVG from "./Svg";

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-img max-w-[5rem]">{children}</div>
      <p className="text-slate-200">{title}</p>
    </div>
  );
};

export default Card;
