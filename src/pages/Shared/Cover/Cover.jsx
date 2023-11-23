// import Button from "../../../components/Button/Button";


const Cover = ({img, title, description}) => {
  return (
    <div className="hero h-[600px]" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center bg-slate-950 bg-opacity-40 rounded-3xl text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">{description}</p>
      {/* <Button buttonName="Get Started"></Button> */}
    </div>
  </div>
</div>
  );
};

export default Cover;