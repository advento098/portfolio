export default function Card({ children, alt, img, description, title }) {
  return (
    <div className="card bg-white h-58 w-40 p-3">
      <img src={img} alt={alt} className="border-2 border-red-700 h-5/12" />
      <h1 className="text-black text-center">{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
}
