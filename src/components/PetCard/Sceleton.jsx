import React from 'react'
import ContentLoader from 'react-content-loader'

const Sceleton = () => (
  <ContentLoader
    class-name="pet-block"
    speed={20}
    width={280}
    height={520}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
     >
    <rect x="533" y="234" rx="3" ry="3" width="52" height="6" /> 
    <rect x="25" y="278" rx="7" ry="7" width="223" height="27" /> 
    <rect x="-1" y="319" rx="8" ry="8" width="280" height="88" /> 
    <rect x="1" y="423" rx="8" ry="8" width="63" height="27" /> 
    <rect x="140" y="420" rx="17" ry="17" width="143" height="44" /> 
    <rect x="10" y="0" rx="0" ry="0" width="260" height="260" />
  </ContentLoader>
)

export default Sceleton
