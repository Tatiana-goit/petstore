import { MutatingDots } from 'react-loader-spinner'
import s from './Loader.module.scss'

export function Loader() {
  return (
    <div className={s.loader}>
      <MutatingDots
        height="100"
        width="100"
        color="#ac1313"
        secondaryColor="#ac1313"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}
