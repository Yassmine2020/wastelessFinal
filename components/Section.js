export default function Section(props) {
  return (
    <div
      className={
        "bg-white flex flex-col  h-full px-5 py-3 shadow rounded-xl " +
        props.className
      }
    >
      {props.title ? (
        <div className="flex text-gray-800 text-xl font-semibold">
          {props.title}
        </div>
      ) : null}
      <div className="flex-1">{props.children}</div>
    </div>
  );
}
