import { FilterType } from '../App'

interface FilterButtonsProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  activeCount: number
}

function FilterButtons({ currentFilter, onFilterChange, activeCount }: FilterButtonsProps) {
  return (
    <div className="filter-buttons">
      <button
        className={`btn btn-filter ${currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        Все
      </button>
      <button
        className={`btn btn-filter ${currentFilter === 'active' ? 'active' : ''}`}
        onClick={() => onFilterChange('active')}
      >
        Активные ({activeCount})
      </button>
      <button
        className={`btn btn-filter ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        Завершённые
      </button>
    </div>
  )
}

export default FilterButtons
