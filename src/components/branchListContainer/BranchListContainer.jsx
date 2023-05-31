import { BRANCHS } from '../../variables'
import { Branch } from '../branch/Branch'
import './BranchListContainer.css'

export function BranchListContainer () {

  const branchs = BRANCHS
  return (
    <main>
      <ul className='branch-list-container'>
        {branchs.map(branch => {
          return <Branch key={branch.id} data={{...branch}} />
        })}
      </ul>
    </main>
  )

}