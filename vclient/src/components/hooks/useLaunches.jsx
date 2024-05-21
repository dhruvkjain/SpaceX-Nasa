import { useCallback, useEffect, useState } from "react";

import {
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
} from './requests';

function useLaunches() {
  const [launches, saveLaunches] = useState([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    fetchedLaunches.sort((a,b)=>{
      return a.flightNumber - b.flightNumber;
    })
    saveLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const submitLaunch = useCallback(async (e) => {
    e.preventDefault();
    setPendingLaunch(true);
    const data = new FormData(e.target);
    const launchDate = new Date(data.get("launch-day"));
    const mission = data.get("mission-name");
    const rocket = data.get("rocket-name");
    const target = data.get("planets-selector");
    const response = await httpSubmitLaunch({
      launchDate,
      mission,
      rocket,
      target,
    });

    const success = response.ok;
    if (success) {
      getLaunches();
      setTimeout(() => {
        setPendingLaunch(false);
        alert('Launch successfull');
        // onSuccessSound();
      }, 800);
    } else {
      alert('Launch failed');
      // onFailureSound();
    }
  }, [getLaunches]);

  const abortLaunch = useCallback(async (id) => {
    const response = await httpAbortLaunch(id);

    const success = response.ok;
    if (success) {
      getLaunches();
      alert('Launch aborted');
      // onAbortSound();
    } else {
      alert('Abort launch failed');
      // onFailureSound();
    }
  }, [getLaunches]);

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  };
}

export default useLaunches;