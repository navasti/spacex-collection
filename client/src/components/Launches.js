import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'

const LaunchesQuery = gql`
    query LaunchesQuery{
        launches{
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`

const Launches = () => {
    return (
        <> 
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 className="display-4 my-3">Launches</h1>
                <div>
                    <p className="mb-1"><span className="px-3 mr-1 bg-success"/> = Success</p>
                    <p className="m-0"><span className="px-3 mr-1 bg-danger"/> = Fail</p>
                </div>
            </div>
            <Query query={LaunchesQuery}>
                {({ loading, error, data }) => {
                    if(loading) return <h4>Loading...</h4>
                    if(error) console.log(error)
                    console.log(data)
                    return (
                        <>
                            {data.launches.map(launch => (
                                <LaunchItem key={launch.flight_number} launch={launch}/>
                            ))}
                        </>
                    )
                }}
            </Query>
        </>
    )
}

export default Launches
