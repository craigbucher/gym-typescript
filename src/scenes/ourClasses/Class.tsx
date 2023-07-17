// define typescript types:
type Props = {
  name: string;
  description?: string;	// optional
  image: string;
};

// could give description a default value: description = 'some description'
// will be overridden if description prop has a value
const Class = ({ name, description, image }: Props) => {
	// define 'overlayStyles' variable
	// overlays description text on class image:
	// absolute = position: absolute for child element
	// z-30 = ensure it's on top
	// h-[380px] w-[450px] = exactly 380px height, 450px width (same as image)
	// flex-col = align from top to bottom
	// items-center justify-center = center both verticall and horizontally
	// whitespace-normal = cause text to wrap normally within an element
	// opacity-0 = start invisible
	// transition duration-500 hover:opacity-90 = on hover, transition to 90% opacity in .5 seconds
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
		// relative = because will be parent component
		// inline-block = wrap the element to prevent the text inside from extending beyond its parent
		// h-[380px] w-[450px] = exactly 380px height 450px width
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      {/* overlayStyles = variable defined, above */}
			<div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
			{/* alt = name of image */}
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;