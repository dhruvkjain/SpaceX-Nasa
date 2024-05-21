import { useMemo } from "react";

function Launch({ planets, submitLaunch}) {

    const today2 = new Date().toISOString().split("T")[0];
    const selectorBody = useMemo(() => {
        return planets?.map(planet => 
          <option value={planet.kepler_name} key={planet.kepler_name}>{planet.kepler_name}</option>
        );
      }, [planets]);

    return (
        <div className="text-center flex justify-center items-center">
            <div className="max-w-[60vw] min-w-[500px] leading-8 p-6 min-h-[70vh] m-[20px] bg-white bg-opacity-20 backdrop-blur-[3px] rounded-[20px] drop-shadow-lg">
                <p className="font-bold text-[1.4rem]">Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets.</p>
                <p className="pl-6 font-semibold text-left">Only confirmed planets matching the following criteria are available for the earliest scheduled missions:</p>
                <ul className="pl-6 font-semibold text-left">
                    <li className="list-disc">Planetary radius &lt; 1.6 times Earth&apos;s radius</li>
                    <li className="list-disc">Effective stellar flux &gt; 0.36 times Earth&apos;s value and &lt; 1.11 times Earth&apos;s value</li>
                </ul>

                <form className="mt-10 p-5 font-semibold bg-blue-500 bg-opacity-20 backdrop-blur-[3px] rounded-[20px] drop-shadow-lg" onSubmit={submitLaunch} style={{ display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px" }}>
                    <label htmlFor="launch-day">Launch Date</label>
                    <input className="pl-2 rounded-md" type="date" id="launch-day" name="launch-day" min={today2} max="2040-12-31" defaultValue={today2} />
                    <label htmlFor="mission-name">Mission Name</label>
                    <input className="pl-2 rounded-md" type="text" id="mission-name" name="mission-name" />
                    <label htmlFor="rocket-name">Rocket Type</label>
                    <input className="pl-2 rounded-md" type="text" id="rocket-name" name="rocket-name" defaultValue="Explorer IS1" />
                    <label htmlFor="planets-selector">Destination Exoplanet</label>
                    <select className="pl-1 rounded-md" id="planets-selector" name="planets-selector">
                        {selectorBody}
                    </select>
                    <div className="flex col-span-2 justify-center items-center w-[100%]">
                        <input className="text-green-400 bg-black pl-2 pr-2 rounded-md cursor-pointer" type="submit" value="Launch Mission ✔"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

Launch.propTypes = {
    planets: Array,
    submitLaunch: Function,
};

export default Launch
