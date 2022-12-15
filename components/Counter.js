export default function Counter(props) {
  return (
    <div className="flex h-full justify-center items-center">
      <div>
        <span className="text-6xl text-primary-900 mr-2">{props.num}</span>
        <span className="font-light">{props.unit}</span>
      </div>
    </div>
  );
}
