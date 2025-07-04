import React from 'react';
import useGithubInfo from '../../../hooks/useGithubInfo';
import { useLoaderData } from 'react-router-dom';
function Github() {
  //const data = useGithubInfo();
  const data=useLoaderData()
  return (
    <>
      

      {/* Safely handle loading or undefined states */}
      <div className="text-center text-xl">
        {data && data.status=="OK" ? (<>
        
          <p className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Username: {data.result[0].handle}</p>
          <img src={data.result[0].titlePhoto} alt="" />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Github;

export const GithubInfoLoader = async ()=> {
  const response = await fetch("https://codeforces.com/api/user.info?handles=SoumyadeepPal&checkHistoricHandles=false")
  return response.json();
}