// import type { MediaItem } from "../types/workData";

import { MediaItem } from "../types/workData";

interface Props {
    className: string;
    title: string;
    description?: string | null;
    items?: (string | MediaItem)[] | null;
}

export default function MediaSection({ className, title, description, items }: Props){
  if(!items || items.length === 0) return null; 
  
  return(
      <div className={`${className} media__section`}>
        <div className="media__title">
            <h5>{title}</h5>
            {description && <p className="sub__text"> {description} </p>}
        </div>
        <div className="media__frame">
        {items.map((item, i) => {
            const url = typeof item === 'string' ? item : item.url;
            const label = typeof item === 'string' ? undefined : item.label;            
            return(
                <div className="media__item" key={`${url}-${i}`}>
                    {label && <p>{label}</p>}
                    <img src={url} alt={label ?? title} />
                </div>  
            )}
        )}
        </div>
    </div>
  );
}
