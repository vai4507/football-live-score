import React from 'react'
import { Link } from 'react-router-dom'
export default function Table({data}) {
  return (
    <div className="bg-neutral-700 grid grid-cols-1 divide-y text-gray">
      {data.response.map((fixture)=>(
        <Link to={`/fixture/${fixture.fixture.id}`} key={fixture.fixture.id}>
        <div className="bg-neutral-700 py-2">
            <div className="bg-neutral-700 py-2">
              <div align="center">
                <img src={fixture.league.logo} width={50} alt={fixture.league.name}/>
                {fixture.league.name}
              </div>
              <div className='text-center'>
                {fixture.fixture.status.long}
              </div>
              <div className='w-full flex p-3'>
                <div className='w-[50%]' align='center'><img src={fixture.teams.home.logo} width={90} alt={fixture.teams.home.name}/></div>
                <div className='w-[32%] text-right'>{fixture.teams.home.name}</div>
                <div className='w-[16%] text-center' >{fixture.goals.home} - {fixture.goals.away}</div>
                <div className='w-[32%] text-left'>{fixture.teams.away.name}</div>
                <div className='w-[50%]' align='center'><img src={fixture.teams.away.logo} width={90} alt={fixture.teams.away.name}/></div>
              </div>
              <div className='text-center text-green-600'>{fixture.fixture.status.elapsed}'</div><br/>
              <div className='text-center text-indigo-200'>Stadium : {fixture.fixture.venue.name}</div>
              <div className='text-center text-indigo-200'>Place : {fixture.fixture.venue.city}</div>
              <div className='text-center text-indigo-200'>Round : {fixture.league.round}</div>
            </div>
        </div>
        </Link>
      ))}
    </div>
  )
}
