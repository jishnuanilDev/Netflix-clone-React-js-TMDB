import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Banner from './components/Banner/Banner';
import Poster from './components/Poster/Poster';
import Apitester from './components/ApiTester/Apitester';

import { popularMovies,upComingMovies,topRated,NowPlaying ,trending,originals,action,comedy,horror,romance,documentries} from './url';



function App() {
  return (

    <>
    
<NavBar/>
<Banner/>

<Poster title = {'Now Playing'} url = {NowPlaying}/>
<Poster title = {'Trending On Netflix'} url = {trending}/>
<Poster title = {'Netflix Originals'} url = {originals}/>
<Poster title = {'Popular On Netflix'} url={popularMovies}/>
<Poster title = {'Top Rated Movies '} url={topRated}/>
<Poster title = {'Action Movies '} url={action}/>
<Poster title = {'Comedy Movies '} url={comedy}/>
<Poster title = {'Horror Movies '} url={horror}/>
<Poster title = {'Romance Movies '} url={romance}/>
<Poster title = {'Documentries '} url={documentries}/>



</>
  )
}

export default App;
