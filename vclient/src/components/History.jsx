import { useMemo } from "react";

function History({ launches }) {

    const tableBody = useMemo(() => {
        return launches?.filter((launch) => !launch.upcoming)
            .map((launch) => {
                return <tr key={String(launch.flightNumber)}>
                    <td className="border-[3px] border-black p-2">
                        <span 
                            className="cursor-help"
                            style={{ color: launch.success ? "greenyellow" : "red" }}
                            title={ launch.success ? "Successful" : "Failed"}
                        >█</span>
                    </td>
                    <td className="border-[3px] border-black p-2">{launch.flightNumber}</td>
                    <td className="border-[3px] border-black p-2">{new Date(launch.launchDate).toDateString()}</td>
                    <td className="border-[3px] border-black p-2">{launch.mission}</td>
                    <td className="border-[3px] border-black p-2">{launch.rocket}</td>
                    <td className="border-[3px] border-black p-2">{launch.customers?.join(", ")}</td>
                </tr>;
            });
    }, [launches]);

    return (
        <div className="flex justify-center items-center">
            <div className="w-[60vw] p-4 h-[fit-content] m-[20px] bg-white bg-opacity-20 backdrop-blur-sm rounded-[20px] drop-shadow-lg">
                <table className="table-fixed">
                    <thead>
                        <tr className="border-[3px] border-black p-2">
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "5vw" }}></th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "5vw" }}>No.</th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "10vw" }}>Date</th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "5vw" }}>Mission</th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "5vw" }}>Rocket</th>
                            <th className="border-[3px] bg-blue-800 border-black p-2" style={{ maxWidth: "10vw" }}>Customers</th>
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

History.propTypes = {
    launches: Array 
};

export default History
