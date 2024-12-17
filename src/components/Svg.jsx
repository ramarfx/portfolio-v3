export default function SVG({ title, fill, path, fill2, path2, children }) {
  return (
    <>
      {path && (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>{title}</title>
          <path fill={fill} d={path} />
          {path2 && (
            <path fill={fill2} d={path2} />
          )}
        </svg>
      )}
      { children }
    </>
  );
}
