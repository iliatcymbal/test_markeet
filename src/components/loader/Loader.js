import './loader.scss';

export const Loader = ({ shown }) => (
  shown ?
    <div className="loader">
      { new Array(8).fill(8).map((el, index) => <div key={index} />) }
    </div>
    : null
);
