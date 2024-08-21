import React from 'react'
import { useParams } from 'react-router-dom'
import Goal from '../assets/images/goal.png'
export default function Fixture({ data }) {
    const params = useParams();
    const matchID = params.matchID;

    const results = data.response.filter((match) => {
        return match.fixture.id == matchID
    })
    const fixture = results[0];
    return (
        <div className="bg-neutral-700 h-screen">

            <div className="bg-neutral-700 py-2">
                <div align="center">
                    <img src={fixture.league.logo} width={50} alt={fixture.league.name} />
                    {fixture.league.name}
                </div>
                <div className='text-center'>
                    {fixture.fixture.status.long}
                </div>
                <div className='w-full flex p-3'>
                    <div className='w-[50%]' align='center'><img src={fixture.teams.home.logo} width={90} alt={fixture.teams.home.name} /></div>
                    <div className='w-[32%] text-right'>{fixture.teams.home.name}</div>
                    <div className='w-[16%] text-center'>{fixture.goals.home} - {fixture.goals.away}</div>
                    <div className='w-[32%] text-left'>{fixture.teams.away.name}</div>
                    <div className='w-[50%]' align='center'><img src={fixture.teams.away.logo} width={90} alt={fixture.teams.away.name} /></div>
                </div>
                <div className='text-center text-green-600'>{fixture.fixture.status.elapsed}'</div><br />
                <div className='text-center text-indigo-200'>Stadium : {fixture.fixture.venue.name}</div><br/>
                <div className='text-center text-indigo-200'>Place : {fixture.fixture.venue.city}</div><br/>
                <div className='text-center text-indigo-200'>Round : {fixture.league.round}</div><br/>
                <div className='text-center text-indigo-200'>Season : {fixture.league.season}</div>
            </div>
            <div align='center' className='grid grid-cols-1 divide-y'>
                <h1 className='bg-gray-700 p-1 text-gray-300 text-xl'>Events</h1>
                {!fixture.events ? null : fixture.events.map((event) => (
                    <div className='p-4' key={event.team.id}>
                        {event.type === "Goal" ? (
                            <div>
                                <img src={Goal} width={15} alt="GOAL" />
                            </div>
                        ) : (
                            <div className="badge badge-secondary">{event.type}</div>
                        )}{" "}
                        {event.player.name} <small>({event.team.name})</small>
                    </div>
                ))}
            </div>
            <div align='center' className='grid grid-cols-1 divide-y'>
                <h1 className='bg-gray-700 p-1 text-gray-300 text-xl'>Score</h1>
                <div className='p-2'>
                    First Half
                    <br />
                    {fixture.score.halftime.home}-{fixture.score.halftime.away}
                </div>

                {fixture.score.fulltime.home ? (
                    <div className='p-2'>
                        Full Time
                        <br />
                        {fixture.score.fulltime.home}-{fixture.score.fulltime.away}
                    </div>
                ) : null}

                {fixture.score.extratime.home ? (
                    <div className='p-2'>
                        Extra Time
                        <br />
                        {fixture.score.extratime.home}-{fixture.score.extratime.away}
                    </div>
                ) : null}

                {fixture.score.extratime.home ? (
                    <div className='p-2'>
                        Penalties
                        <br />
                        {fixture.score.penalty.home}-{fixture.score.penalty.away}
                    </div>
                ) : null}
            </div>

        </div>
    )
}
