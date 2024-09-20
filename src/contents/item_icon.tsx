import React, { useEffect, useRef } from "react";
import { Icons} from '@pkmn/img';

 const ItemIcon: React.FC = () => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Create a new DOM element
    const icon = document.createElement('span')
    icon.setAttribute('style', Icons.getItem('Choice Band').style)

    // Append the created element to the container div
    if (containerRef.current) {
      containerRef.current.appendChild(icon);
    }
  }, []);

  return <span ref={containerRef} />;
};

export { ItemIcon };

