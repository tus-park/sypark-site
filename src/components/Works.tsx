import { useEffect, useState } from 'react';
import { filters } from '../data';
import type { Filter } from '../types/types';
import { supabase } from '../lib/supabaseClient';
import type { Work } from '../types/types';

export async function getWorks() : Promise<Work[]> {
  const { data, error } = await supabase
  .from('works')
  .select('*');
  if (error) throw error;
  return data ?? [];
}


export default function Works() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>('all');
  const list = filter === 'all' ? works : works.filter((w) => w.category === filter);

  useEffect(() => {
    getWorks().then(setWorks).finally(() => setLoading(false));
  }, []);

  return (
    <section id="works" className="section">
      <div className="wrap">
        <div className="works__head">
          <h2>WORKS</h2>
          <div className="filter__group" role="group" aria-label="작업물 필터">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter${f === filter ? ' is-active' : ''}`}
                aria-pressed={f === filter}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <ul className="works__lists">
          {list.map((w) => (
            <li
              key={w.id}
              className={`card`}
              style={{ backgroundImage: `url(${w.thumbnail})`, height: w.height }}
            >
              <p className="card__title">{w.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
