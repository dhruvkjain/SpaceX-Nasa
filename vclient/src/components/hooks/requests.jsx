const APT_URL = 'http://localhost:3000/v1'

async function httpGetPlanets() {
  const request = await fetch(`${APT_URL}/planets`);
  const response = await request.json();
  return response;
}

async function httpGetLaunches() {
  const request = await fetch(`${APT_URL}/launches`);
  const response = await request.json();
  return response;
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${APT_URL}/launches` , {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(launch),
    });
  }
  catch(err){
    return {ok:false}
  }
}

async function httpAbortLaunch(id) {
  try{
    return await fetch(`${APT_URL}/launches/${id}` , {
      method: 'delete',
    })
  }
  catch(err){
    return {ok:false}
  }
  
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};