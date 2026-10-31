import { useEffect, useState } from 'react';
import type { Work, Filter } from '../types/work';
import { supabase } from '../lib/supabaseClient';
import WorkModal from './WorkModal';


export async function getWorks() : Promise<Work[]> {
  const { data, error } = await supabase
  .from('works')
  .select('*')
  .order('id', { ascending: false }); // id 순서
  if (error) throw error;
  return data ?? [];
}
// 데이터베이스 가져오기

export function toTagList(tags: unknown): string[] {
  if (Array.isArray(tags)) return tags.map(String);
  if (typeof tags === 'string') {
    return tags.split(',').map((t) => t.trim()).filter(Boolean);
  }
  return [];
}
// 태그 리스트

export default function Works() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>('all');
  const list = filter === 'all' ? works : works.filter((w) => w.category === filter);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const index = list.findIndex((w) => w.id === selectedId);
  const move = (step: number) => setSelectedId(list[(index + step + list.length) % list.length].id);
  const openModal = (id: number) => setSelectedId(id);
  const closeModal = () => setSelectedId(null);
  const filters = ['all', ...new Set(works.map((p) => p.category))];

  // 렌더링
  useEffect(() => {
    getWorks().then(setWorks).finally(() => setLoading(false));
  }, []);

  return (
    <section id="works" className="section">
      <div className="wrap">
        <h3 className="works__head">WORKS 🗂</h3>
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
        <ul className="works__lists">
          {list.map((w) => (
            <li
              key={w.id}
              className={`card`}
              style={{ backgroundImage: `url(${w.thumbnail})` }}
              onMouseEnter={() => setHoveredId(w.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openModal(w.id)}
            >
              {hoveredId === w.id && (
                <div className="card__overlay">
                  <p className="card__title">{w.title}</p>
                  <p className="card__tags">{toTagList(w.tags).map((t) => `#${t}`).join(' ')}</p>
                  <p className='card__more'>＋View</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <WorkModal
        work={index >= 0 ? list[index] : null}
        onClose={() => setSelectedId(null)}
        onPrev={() => move(-1)}
        onNext={() => move(1)}
      />
    </section>
);
}
