import React from 'react';
// import queryString from 'query-string';
import  qs from 'qs';

const About = ({location, match}) => {
    // const query = queryString.parse(location.search);
    const query = qs.parse(location.search.slice(1));
    console.log(query);
    const detail = query.detail === 'true';
    return (
        <div>
            <h2>
                About {match.params.name}
            </h2>
            {detail && 'detail : blahblah'}
        </div>
    );
}

export default About; 