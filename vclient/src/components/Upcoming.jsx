import { useMemo } from "react";

function Upcoming({ launches , abortLaunch }) {

    const tableBody = useMemo(() => {
        return (
            launches?.filter((launch) => launch.upcoming).map((launch) => {
                return( 
                    <tr key={String(launch.flightNumber)}>
                    <td className="border-[3px] border-black p-2">
                        <a className="cursor-pointer text-red-600" title="Abort Launch" onClick={() => abortLaunch(launch.flightNumber)}>
                            ✖
                        </a>
                    </td>
                    <td className="border-[3px] border-black p-2">{launch.flightNumber}</td>
                    <td className="border-[3px] border-black p-2">{new Date(launch.launchDate).toDateString()}</td>
                    <td className="border-[3px] border-black p-2">{launch.mission}</td>
                    <td className="border-[3px] border-black p-2">{launch.rocket}</td>
                    <td className="border-[3px] border-black p-2">{launch.target}</td>
                    </tr>
                );
          }));
      }, [launches, abortLaunch]);

    return (
        <div className="flex justify-center items-center">
            <div className="w-[fit-content] p-4 h-[fit-content] m-[20px] bg-white bg-opacity-20 backdrop-blur-sm rounded-[20px] drop-shadow-lg">
                <table className="table-fixed">
                    <thead>
                        <tr className="border-[3px] bg-blue-800 border-black">
                            <th style={{ width: "5vw" }}></th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "5vw" }}>No.</th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "10vw" }}>Date</th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "10vw" }}>Mission</th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "10vw" }}>Rocket</th>
                            <th>Destination</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Upcoming.propTypes = {
    launches: Array,
    abortLaunch: Function 
}

export default Upcoming
