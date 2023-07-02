import React from 'react';
import HomeTitle from '../components/Home/HomeTitle';
import Icons from '../components/Utilities/Icons';
import Spinner from '../components/Utilities/Spinner';
import useReadyState from '../hooks/useReadyState';

const Home = () => {
	const [loading] = useReadyState();

    return (

        <>
        {loading ? <Spinner height="100px" width="100px" lg={true} /> :   <div>
            <HomeTitle name="Michael Whyte" role="web developer" />
            <Icons />
        </div>}
        </>
      
    )
}

export default Home;
